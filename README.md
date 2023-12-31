# Check your Balance

1. Find out your principal id:

   ```bash
   dfx identity get-principal
   ```

2. Save it somewhere.

   e.g. My principal id is: `gbdev-tyqsv-hnvqv-7mgz4-4kcfl-wbv6x-6khez-y56gq-uohqs-quomc-uqe`

3. Format and store it in a command line variable:

   ```bash
   OWNER_PUBLIC_KEY="principal \"$(dfx identity get-principal)\""
   ```

4. Check that step 3 worked by printing it out:

   ```bash
   echo $OWNER_PUBLIC_KEY
   ```

5. Check the owner's balance:

   ```bash
   dfx canister call token_backend balanceOf "($OWNER_PUBLIC_KEY)"
   ```

# Charge the Canister

1. Check canister ID:

   ```bash
   dfx canister id token_backend
   ```

2. Save canister ID into a command line variable:

   ```bash
   CANISTER_PUBLIC_KEY="principal \"$(dfx canister id token_backend)\""
   ```

3. Check canister ID has been successfully saved:

   ```bash
   echo $CANISTER_PUBLIC_KEY
   ```

4. Transfer half a billion tokens to the canister Principal ID:

   ```bash
   dfx canister call token_backend transfer "($CANISTER_PUBLIC_KEY, 500_000_000)"
   ```

# Deploy the Project to the Live IC Network

1. Create and deploy canisters:

   ```bash
   dfx deploy --network ic
   ```

2. Check the live canister ID:

   ```bash
   dfx canister --network ic id token_backend
   ```

3. Save the live canister ID to a command line variable:

   ```bash
   LIVE_CANISTER_KEY="principal \"$(dfx canister --network ic id token)\""
   ```

4. Check that it worked:

   ```bash
   echo $LIVE_CANISTER_KEY
   ```

5. Transfer some tokens to the live canister:

   ```bash
   dfx canister --network ic call token transfer "($LIVE_CANISTER_KEY, 50_000_000)"
   ```

6. Get live canister front-end id:

   ```bash
   dfx canister --network ic id token_assets
   ```

7. Copy the id from step 6 and add `.raw.ic0.app` to the end to form a URL.
   e.g. `zdv65-7qaaa-aaaai-qibdq-cai.raw.ic0.app`