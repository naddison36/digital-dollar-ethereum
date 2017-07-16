# Asset-Backed Token Processes

## Asset Holder creates a new account for a token holder
1. Token holder creates a blockchain identity (externally owned account). This is essentially generating a random private key that is then used to derive their blockchain identity (public key).
2. Token holder securely stores their private key. The asset holder never knows the token holder's private key.
3. Token holder requests a token account to be verified by the asset holder using a asset holder’s secure channel. e.g. API, online or mobile channels.
4. The asset holder responds with a message to be signed by the private key over the asset holder’s secure channel.
5. The token holder signs the asset holder’s message with the private key and sends back the signature to the asset holder over the asset holder’s secure channel.
6. The asset holder verifies the signed message using the public key of the token holder's blockchain identity.
7. If the message is valid, the asset holder records the token holder's blockchain identity. This is done in the asset holder's systems and not on the blockchain.
8. The asset holder registers the token account for the token holder in the blockchain contract.

## Asset holder issues asset-backed tokens to the token holder on instruction from the token holder
1. The token holder sends an instruction to the asset holder over a secure channel to deposit asset-backed tokens into their token account.
2. The asset holder debits assets from the token holder's off blockchain (traditional) account.
3. If necessary, the asset holder deposits the backing asset with the settlement institution. See the next process for details.
4. the asset holder invokes the blockchain contract to increase the token holder's available tokens. This transaction is signed by the asset holder's private key, not the private key of the token holder.
5. The blockchain contract will ensure the settlement institution has enough assets in its settlement account to cover the token holder's newly created asset-backed tokens.

## Asset holder deposits assets into the blockchain contract via the settlement institution
1. The asset holder sends assets to the settlement institution via traditional channels.
3. The settlement institution creates a settlement account in the blockchain contract for the asset holder if one does not already exist.
4. Once the asset transfer has settled, the settlement institution increases the asset holder's assets in the blockchain contact.
5. The blockchain contact notifies the asset holder that their assets have been increased in the blockchain contact.

## Asset holder withdraws assets from the blockchain contract via the settlement institution
1. The asset holder sends a withdrawal instruction to the settlement institution.
2. The settlement institution withdraws asset holder's assets from the blockchain contract.
3. The settlement institution sends a withdrawn assets to the asset holder via traditional methods.

## Asset holder withdraws asset-backed tokens from the blockchain contract on instruction from the token holder
1. The token holder sends an instruction to their asset holder over a secure channel requesting tokens be withdrawn from the blockchain contract. Most likely the settlement instruction would be to credit their off blockchain account held with the asset holder. It could, however, be an instruction to pay a nominated bank account held with a separate asset holder.
2. The asset holder debits funds from the token holder's blockchain account. This has a knock on effect of reducing the asset holder's liability to hold funds with the settlement institution.
3. The asset holder credits the funds according to the token holder's instructions.

## Token holder transfers their asset-backed tokens to another token holder
1. The blockchain contract validates that the
    * sending token holder account has enough asset-backed tokens
    * receiving token holder has an account
2. the blockchain contract decreases the token balance of the sending token holder
3. the blockchain contract increases the token balance of the receiving token holder
4. if the sending and receiving asset holders are different, the blockchain contract
    * decreases the sending asset holder's unsettled assets in the blockchain contract
    * increases the receiving asset holder's unsettled assets in the blockchain contract

## Settlement institution settles the assets between the asset holders
1. The settlement institution invokes the settlement process on the blockchain contract.
2. For each asset holder, the blockchain contract transfers the unsettled balances to the settled balances in the blockchain contract and emits a settlement event. If there is no unsettled balance for the asset holder then no settlement event is emitted.
3. For each settlement event emitted, the settlement institution debits or credits the asset holder's settlement account by the amount specified in the settlement event.