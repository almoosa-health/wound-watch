/* ─────────────────────────────────────────────────────────────
   WOUND WATCH — Microsoft sign-in (shared by both pages)
   Uses MSAL.js against the Almoosa tenant (single-tenant app,
   so only @almoosahealth.com.sa accounts can ever sign in).
   Do not edit — settings come from config.js (AZURE block).
   ───────────────────────────────────────────────────────────── */

const wwMsal = new msal.PublicClientApplication({
  auth: {
    clientId: WW_CONFIG.AZURE.CLIENT_ID,
    authority: "https://login.microsoftonline.com/" + WW_CONFIG.AZURE.TENANT_ID,
    redirectUri: window.location.origin + window.location.pathname,
  },
  cache: { cacheLocation: "localStorage" },
});

/* Resolves with the signed-in account, or null if not signed in.
   Call once on page load. */
async function wwInitAuth() {
  const result = await wwMsal.handleRedirectPromise(); // completes a returning login
  if (result && result.account) {
    wwMsal.setActiveAccount(result.account);
    return result.account;
  }
  const accounts = wwMsal.getAllAccounts();
  if (accounts.length) {
    wwMsal.setActiveAccount(accounts[0]);
    return accounts[0];
  }
  return null;
}

/* Starts the Microsoft login (full-page redirect — reliable on
   hospital PCs where popups are often blocked). */
function wwSignIn() {
  wwMsal.loginRedirect({ scopes: ["openid", "profile", "email"] });
}

function wwSignOut() {
  wwMsal.logoutRedirect({
    postLogoutRedirectUri: window.location.origin + window.location.pathname,
  });
}

/* The signed-in email, lowercased (username is the UPN/email). */
function wwUserEmail(account) {
  return (account && account.username ? account.username : "").toLowerCase();
}

function wwUserName(account) {
  return account && account.name ? account.name : "";
}
