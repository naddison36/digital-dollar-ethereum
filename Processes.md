# Fiat-Backed Token Processes

## Financial institution creates a new blockchain account for a token holder
1. Token holder creates a blockchain identity (externally owned account). This is essentially generating a random private key that is then used to derive blockchain identity (public key).
2. Token holder securely stores their private key. The financial institution never knows the token holder's private key.
3. Token holder requests a blockchain account to be verified by the financial institution using a financial institution’s secure channel. e.g. API, online or mobile channels.
4. The financial institution responds with a message to be signed by the private key over the financial institution’s secure channel.
5. The token holder signs the financial institution’s message with the private key and sends back the signature to the financial institution over the financial institution’s secure channel.
6. The financial institution verifies the signed message using the public key of the token holder's blockchain identity.
7. If the message is valid, the financial institution records the blockchain account against the token holder. This is done in the financial institution's systems and not on the blockchain.
8. The financial institution registers the blockchain account for the token holder on the blockchain contract.
9. The new blockchain account is associated with the financial institution within the blockchain contract.

## Financial institution deposits fiat-backed tokens into the token holder's blockchain account on instruction from the token holder
1. The token holder sends an instruction to the financial institution over a secure channel to deposit fiat-backed tokens into their blockchain account.
2. The financial institution debts fiat currency from the token holder's off blockchain (traditional) account.
3. If necessary, the financial institution deposits fiat currency to its settlement account held by the settlement institution. See the next process for details.
4. the financial institution invokes the blockchain contract to credit the token holder's blockchain account. This transaction is signed by the financial institution's private key, not the private key of the token holder.
5. The blockchain contract will ensure the settlement institution has enough fiat currency in its settlement account to cover the token holder's newly credited fiat-backed tokens.

## Financial institution deposits funds the blockchain contract via the settlement institution
1. The financial institution sends a deposit instruction to the settlement institution.
2. The financial institution sends a credit transfer to the settlement institution to transfer fiat to the settlement institution using a tradition payment method. eg RTGS or WIRES.
3. The settlement institution creates a settlement account in the blockchain contract for the financial institution if one does not already exist.
4. Once the credit transfer has settled, the settlement institution deposits funds into the financial institution's settlement account in the blockchain contact.
5. The blockchain contact notifies the financial institution that their settlement account in the blockchain contact has been funded.

## Financial institution withdraws funds from the blockchain contract via the settlement institution
1. The financial institution sends a withdrawal instruction to the settlement institution.
2. The settlement institution withdraws funds from the financial institution's settlement account in the blockchain contract.
3. The settlement institution sends a credit transfer to the financial institution's nominated account using a traditional payment method. eg RTGS or WIRES.

## Financial institution withdraws funds from the token holder's blockchain account on instruction from the token holder
1. The token holder sends an instruction to their financial institution over a secure channel requesting funds be withdrawn from their blockchain account with settlement instructions. Most likely the settlement instruction would be to credit their off blockchain account held with the financial institution. It could, however, be an instruction to pay a nominated bank account held with a separate financial institution.
2. The financial institution debts funds from the token holder's blockchain account. This has a knock on effect of reducing the financial institution's liability to hold funds with the settlement institution.
3. The financial institution credits the funds according to the token holder's instructions.

## Token holder transfers their fiat-backed tokens to another token holder
1. The blockchain contract validates that the
    * debtor's blockchain account exists and has enough fiat-backed tokens
    * creditor's blockchain account exists
2. the blockchain contract debts the fiat-backed tokens from the debtor's blockchain account
3. the blockchain contract credits the fiat-backed tokens to the creditor's blockchain account
4. if the debtor and creditor are will different financial institutions, the blockchain contract
    * debts the debtor's financial institution's settlement blockchain account
    * credits the creditor's financial institution's settlement blockchain account

## Settlement institution settles the fiat currency between the financial institutions
1. The settlement institution initiates the settle payments process on the blockchain contract.
2. For each financial institution, the blockchain contract transfers the unsettled balances to the settled balances in the blockchain contract and emits a settlement event. If there is no unsettled balance for the financial institution then no settlement event is emitted.
3. For each settlement event emitted, the settlement institution debts or credits the financial institution's settlement account by the amount specified in the settlement event.
4. For each settlement event emitted, the financial institution updates their records of the fiat currency held at the settlement institution. eg account management system, general ledger, reconciliation, regulatory reporting or risk management systems.