# Use Cases of the Asset-Back Token Contract

## Settlement institution increases or decreases the asset holder's assets on deposit with them (updateAssets)
* fail transaction if the settlement institution is not the transaction originator.
* if a asset account does not already exist for the asset holder, create a asset account with zero balances.
* fail transaction if the asset holder's remaining assets after the transactions is less than to the tokens issued by the asset holder. The remaining assets = settled assets + unsettled assets + transaction amount. Note the unsettled assets and amount can be negative.
* add the transaction amount to the asset holder's unsettled assets. The transaction amount will be negative if the asset holder is withdrawing assets from the scheme.
* emit an asset update event 

## Asset holder increases or decreases the tokens issued to a token holder (updateTokens)
* fail transaction if the transaction originator does not have an asset holder account.
* fail transaction if the number of tokens to be increased or decreases is zero.
* if the token holder does not have an account, create a token holder account with zero balances.
* fail the transaction if the token holder's asset holder is not the transaction originator, which is the asset holder.
* if increasing the number of tokens
    * revert transaction id the new amount of issued tokens will be greater than the assets held by the asset holder. The number of assets = settled assets + unsettled assets where the unsettled assets can be a negative number.
    * increase the asset holder's number of issued tokens.
    * increase the token holder's number of available tokens.
* else decreasing the number of tokens 
    * revert transaction if the token holder's available tokens after the transaction will be less than zero.
    * decrease the asset holder's number of issued tokens.
    * decrease the token holder's number of available tokens.
* emit event.

## Token holder transfers tokens to another token holder (transfer)
* fail transaction if the transfer amount is greater than the token holder's available tokens
* fail transaction if the receiving token holder does not already have a token account
* decrease the sending token holder's available tokens by the transfer amount
* increase the receiving token holder's available tokens by the transfer amount
* if the asset holders of the sending and receiving token holders are different
    * fail the transaction if the sending asset holder's settled and unsettled assets is less than the tokens being transferred
    * decrease the sending asset holder's unsettled assets and issued tokens by the amount of tokens being transferred
    * increase the receiving asset holder's unsettled assets and issued tokens by the amount of tokens being transferred
    * emit events for the sending and receiving asset holders
* emit event for the transfer
* emit events for the sending and receiving token holders

## Settlement institution settles assets between the asset holders (settleAssets)
* Fail the transaction if the settlement institution is not the transaction originator.
* for each asset holder
    * if unsettled balance is not zero, add asset holder's unsettled assets (which can be negative) to the settled assets
    * set the asset holder's settled assets back to zero.
* emit event for the asset holder
