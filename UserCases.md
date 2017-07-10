# Use Cases of the Blockchain Contract

## Settlement institution deposits fiat collateral to the financial institution's settlement account
* Return an error if the settlement institution is not the transaction originator.
* if a settlement account does not already exist for the financial institution, create a settlement account with zero balances.
* increase the amount of settled fiat collateral for the financial institution.
* emit a settlement balance update event 

## Settlement institution withdraws fiat collateral from the financial institution's settlement account
* Return a failure if
    * the settlement institution is not the transaction originator.
    * a settlement account does not exist for the financial institution.
* ensure the amount of settled fiat collateral after the withdrawal will not be less than the fiat-backed tokens issued to the financial institution's token holders. Unsettled fiat collateral is not allowed to be withdrawn. The settlement process needs to be run before a financial institution can withdraw unsettled fiat collateral.
* decrease the amount of settled fiat collateral of the financial institution.
* emit a settlement balance update event 

## Financial institution deposits fiat-back tokens into the token holder's blockchain account
* Return an error if the
    * transaction originator does not have a settlement account.
    * settled fiat collateral held at the settlement institution will be less than to the new fiat-backed tokens issued by the financial institution.
* if a blockchain account does not already exist for the token holder, create a new account with a zero balance and the financial institution set to the transaction originator.
* Return an error if the transaction originator is not the financial institution of the blockchain account.
* increase the amount of fiat-backed tokens the financial institution has issued to all blockchain accounts.
* increase the amount of fiat-backed tokens issued to the token holder's blockchain account.
* emit an account balance update event.

## Financial institution withdraws fiat-backed tokens from the token holder's blockchain account
* Return an error if
    * the transaction originator does not have a settlement account.
    *  a blockchain account does not already exist for the token holder.
    * the transaction originator is not the financial institution of the token holder's blockchain account.
    * the decreased fiat-backed token balance will be less than zero.
* decrease the amount of fiat-backed tokens the financial institution has issued to all blockchain accounts.
* decrease the amount of fiat-backed tokens issued to the token holder's blockchain account.
* emit an account balance update event.

## Token holder transfers fiat-backed tokens from their blockchain account to another blockchain account
* Return a error if the:
    * transfer amount is negative.
    * token holder does not have a blockchain account setup by their financial institution.
    * amount to be transferred is greater than the fiat-backed tokens available in the blockchain account.
    * blockchain account the fiat-backed tokens are to be transferred to does not exist.
* decrease the blockchain account balance of the transaction originator
* increase the fiat-backed token balance of the blockchain account the tokens are being transferred to.
* decrease the unsettled balance of the debtor agent.
* decrease the fiat collateral held by the debtor agent.
* increase the unsettled balance of the creditor agent.
* increase the fiat collateral held by the creditor agent.
* emit an token holder transfer event for the debtor.
* emit an token holder transfer event for the creditor.
* emit an financial institution transfer event for the debtor agent.
* emit an financial institution transfer event for the creditor agent.

## Settlement institution settles fiat currency between financial institutions from transactions between token holders.
* Return a failure if the settlement institution is not the transaction originator.
* for each financial institution
    * if they have an unsettled balance, move the unsettled balance to the settled balance and emit a settlement event.