const { readdirSync, readFileSync, writeFileSync, existsSync, unlinkSync, rm } = require("fs-extra");
var log = require("./utils/log");
const { join, resolve } = require("path");
const bypass = require("./includes/login/login/loginandby.js");
const chalkAnimation = require('chalkercli');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const gradient = require('gradient-string');
const { execSync } = require('child_process');
const logger = require("./utils/log.js");
const con = require('./config.json');
const login = require('./includes/f');
const moment = require("moment-timezone");
const timeStart = Date.now();
const axios = require("axios");
const os = require('os');
const theme = con.DESIGN.Theme;
let co;
let error;
if (theme.toLowerCase() === 'blue') {
  co = gradient([{color: "#1affa3", pos: 0.2},{color:"cyan",pos:0.4},{color:"pink",pos:0.6},{color:"cyan",pos:0.8},{color:'#1affa3',pos:1}]);
  error = chalk.red.bold;}

else if (theme=="dream2") 
{
  cra = gradient("blue","pink") 
  co = gradient("#a200ff","#21b5ff","#a200ff")
}
  else if (theme.toLowerCase() === 'dream') {
  co = gradient([{color: "blue", pos: 0.2},{color:"pink",pos:0.3},{color:"gold",pos:0.6},{color:"pink",pos:0.8},{color: "blue", pos:1}]);
  error = chalk.red.bold;
}
    else if (theme.toLowerCase() === 'test') {
  co = gradient("#243aff", "#4687f0", "#5800d4","#243aff", "#4687f0", "#5800d4","#243aff", "#4687f0", "#5800d4","#243aff", "#4687f0", "#5800d4");
  error = chalk.red.bold;
}

else if (theme.toLowerCase() === 'fiery') {
  co = gradient("#fc2803", "#fc6f03", "#fcba03");
  error = chalk.red.bold;
}
else if (theme.toLowerCase() === 'rainbow') {
  co = gradient.rainbow
  error = chalk.red.bold;}
  else if (theme.toLowerCase() === 'pastel') {
  co = gradient.pastel
  error = chalk.red.bold;}
  else if (theme.toLowerCase() === 'cristal') {
  co = gradient.cristal
  error = chalk.red.bold;
}else if (theme.toLowerCase() === 'red') {
  co = gradient("red", "orange");
  error = chalk.red.bold;
} else if (theme.toLowerCase() === 'aqua') {
  co = gradient("#0030ff", "#4e6cf2");
  error = chalk.blueBright;
} else if (theme.toLowerCase() === 'pink') {
  cra = gradient('purple', 'pink');
  co = gradient("#d94fff", "purple");
} else if (theme.toLowerCase() === 'retro') {
  cra = gradient("#d94fff", "purple");
  co = gradient.retro;
} else if (theme.toLowerCase() === 'sunlight') {
  cra = gradient("#f5bd31", "#f5e131");
  co = gradient("orange", "#ffff00", "#ffe600");
} else if (theme.toLowerCase() === 'teen') {
  cra = gradient("#00a9c7", "#853858","#853858","#00a9c7");
  co = gradient.teen;
} else if (theme.toLowerCase() === 'summer') {
  cra = gradient("#fcff4d", "#4de1ff");
  co = gradient.summer;
} else if (theme.toLowerCase() === 'flower') {
  cra = gradient("blue", "purple", "yellow", "#81ff6e");
  co = gradient.pastel;
} else if (theme.toLowerCase() === 'ghost') {
  cra = gradient("#0a658a", "#0a7f8a", "#0db5aa");
  co = gradient.mind;
} else if (theme === 'hacker') {
  cra = chalk.hex('#4be813');
  co = gradient('#47a127', '#0eed19', '#27f231');
}
else {
  co = gradient("#243aff", "#4687f0", "#5800d4");
  error = chalk.red.bold;
}
//////////////////////////////////////////////////////////////////////////////
const listPackage = JSON.parse(readFileSync('./package.json')).dependencies;
const listbuiltinModules = require("module").builtinModules;

global.account = {
  appstate: fs.existsSync('./appstate.json') ? JSON.parse(fs.readFileSync('./appstate.json', 'utf8') || '[]') : (fs.writeFileSync('./appstate.json', '[]'), JSON.parse('[]')),
  cookie: JSON.parse(readFileSync('./appstate.json')).map(i => `${i.key}=${i.value}`).join(";"),
token: {
    EAAAAU: JSON.parse(fs.readFileSync('./modules/commands/cache/tokens.json', 'utf8')).EAAAAU,
    EAAD6V7: JSON.parse(fs.readFileSync('./modules/commands/cache/tokens.json', 'utf8')).EAAD6V7
  }
};	
global.client = new Object({
    commands: new Map(),
    superBan: new Map(),
    events: new Map(),
    allThreadID: new Array(),
    allUsersInfo: new Map(),
testMode: JSON.parse(fs.existsSync('./modules/commands/data/testMode.json') ? fs.readFileSync('./modules/commands/data/testMode.json') : '{}'),
    timeStart: {
        timeStamp: Date.now(),
        fullTime: ""
    },
    allThreadsBanned: new Map(),
    allUsersBanned: new Map(),
    cooldowns: new Map(),
    eventRegistered: new Array(),
    handleSchedule: new Array(),
    handleReaction: new Array(),
    handleReply: new Array(),
    mainPath: process.cwd(),
    configPath: new String(),
    getTime: function (option) {
        switch (option) {
            case "seconds":
                return `${moment.tz("Asia/Ho_Chi_minh").format("ss")}`;
            case "minutes":
                return `${moment.tz("Asia/Ho_Chi_minh").format("mm")}`;
            case "hours":
                return `${moment.tz("Asia/Ho_Chi_minh").format("HH")}`;
            case "date": 
                return `${moment.tz("Asia/Ho_Chi_minh").format("DD")}`;
            case "month":
                return `${moment.tz("Asia/Ho_Chi_minh").format("MM")}`;
            case "year":
                return `${moment.tz("Asia/Ho_Chi_minh").format("YYYY")}`;
            case "fullHour":
                return `${moment.tz("Asia/Ho_Chi_minh").format("HH:mm:ss")}`;
            case "fullYear":
                return `${moment.tz("Asia/Ho_Chi_minh").format("DD/MM/YYYY")}`;
            case "fullTime":
                return `${moment.tz("Asia/Ho_Chi_minh").format("HH:mm:ss DD/MM/YYYY")}`;
        }
    }
});

global.data = new Object({
    threadInfo: new Map(),
    threadData: new Map(),
    userName: new Map(),
    userBanned: new Map(),
    threadBanned: new Map(),
    commandBanned: new Map(),
    threadAllowNSFW: new Array(),
    allUserID: new Array(),
    allCurrenciesID: new Array(),
    allThreadID: new Array()
});

global.utils = require("./utils"); 
global.nodemodule = new Object();
global.config = new Object();
global.configModule = new Object();
global.moduleData = new Array();
global.language = new Object();
global.account = new Object();
global.bypass = bypass;
global.api = require("./utils/api");
global.ai = require('./utils/ai.js');
global.index  = require("./utils/index.js");
global.fb = require("./utils/fb.js");
global.kk = require("./utils/HandleFB.js");
global.capcut = require('./utils/capcut.js')
global.j2 = require('./utils/j2.js')
global.spt = require('./utils/sptf.js')
global.phantich = require('./utils/phantich.js')
global.pin = require('./utils/pin.js')
global.tools = require("./includes/tools.js");
global.anti = resolve(process.cwd(),'anti.json');
global.api = (tep) => {
const data = JSON.parse(readFileSync(__dirname + "/includes/" + "datajson" + "/" + tep + ".json", "utf-8"))
return data[Math.floor(Math.random() * data.length)]
}


///////////////////////////////////////
//== Find and get variable from Config =//
/////////////////////////////////////////
var configValue;
try {
    global.client.configPath = join(global.client.mainPath, "config.json");
    configValue = require(global.client.configPath);
}
catch {
    if (existsSync(global.client.configPath.replace(/\.json/g,"") + ".temp")) {
        configValue = readFileSync(global.client.configPath.replace(/\.json/g,"") + ".temp");
        configValue = JSON.parse(configValue);
        logger.loader(`Found: ${global.client.configPath.replace(/\.json/g,"") + ".temp"}`);
    }

}
try {
    for (const key in configValue) global.config[key] = configValue[key];
}
catch { return logger.loader("L?i t?i t?p config!", "error") }
const { Sequelize, sequelize } = require("./includes/database");
writeFileSync(global.client.configPath + ".temp", JSON.stringify(global.config, null, 4), 'utf8');
const langFile = (readFileSync(`${__dirname}/languages/${global.config.language || "en"}.lang`, { encoding: 'utf-8' })).split(/\r?\n|\r/);
const langData = langFile.filter(item => item.indexOf('#') != 0 && item != '');
for (const item of langData) {
    const getSeparator = item.indexOf('=');
    const itemKey = item.slice(0, getSeparator);
    const itemValue = item.slice(getSeparator + 1, item.length);
    const head = itemKey.slice(0, itemKey.indexOf('.'));
    const key = itemKey.replace(head + '.', '');
    const value = itemValue.replace(/\\n/gi, '\n');
    if (typeof global.language[head] == "undefined") global.language[head] = new Object();
    global.language[head][key] = value;
}
global.getText = function (...args) {
    const langText = global.language;    
    if (!langText.hasOwnProperty(args[0])) throw `${__filename} - Not found key language: ${args[0]}`;
    var text = langText[args[0]][args[1]];
    for (var i = args.length - 1; i > 0; i--) {
        const regEx = RegExp(`%${i}`, 'g');
        text = text.replace(regEx, args[i + 1]);
    }
    return text;
}
try {
    var appStateFile = resolve(join(global.client.mainPath,global.config.APPSTATEPATH || 'appstate.json')),
      appState = process.env.KEY && fs.readFileSync(appStateFile, 'utf8')[0] != '[' && global.config.encryptSt ? JSON.parse(decryptState(fs.readFileSync(appStateFile, 'utf8'), process.env.KEY)) : require(appStateFile)
    logger.loader(global.getText('mirai', 'foundPathAppstate'))
  } catch {
    logger.loader(global.getText('mirai', 'notFoundPathAppstate'), 'error')
  }
/////////////////////////////////////
// AUTO CLEAN CACHE CODE BY DONGDEV//
/////////////////////////////////////
if (global.config.autoCleanCache.Enable) {
  const folderPath = global.config.autoCleanCache.CachePath;
  const fileExtensions = global.config.autoCleanCache.AllowFileExtension;

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('L?i khi d?c thu m?c:', err);
      return;
    }
    files.forEach((file) => {
      const filePath = path.join(folderPath, file);
      if (fileExtensions.includes(path.extname(file).toLowerCase())) {

  fs.unlink(filePath, (err) => {
          if (err) {
logger(` file jpg, mp4, gif, ttf, mp3`, "[ AUTO - CLEAN ]", err);
           } else {
         }
      });
    }
});
logger(`ĐÃ TỰ BỎ RÁC VÀO THÙNG RÁC`, "[ AUTO - DỌN ]");
  });
} else {
logger(`TỰ ĐỘNG DỌN RÁC DO BỌN LỒN KIA TẠO RA`, "[ AUTO - CLEAN ]");
}
////////////////////////////////////////////////
//========= �ang nh?p t�i kho?n, b?t d?u Nghe S? ki?n && Nh?n t? d?ng Appstate t? c?u h�nh =========//
////////////////////////////////////////////////

async function loginAppstate() {
  const fs = require('fs');
const CHECK_INTERVAL = 30 * 1000;
let isReconnecting = false;
const checkAccountStatus = async () => {
    try {
        if (!fs.existsSync('./appstate.json')) return false;
        const appstateData = JSON.parse(fs.readFileSync('./appstate.json', 'utf8'));

        if (!Array.isArray(appstateData) || appstateData.length === 0) {
            return false;
        }
        const requiredFields = ['key', 'value', 'expires'];
        const isValidAppState = appstateData.every(entry => 
            requiredFields.every(field => Object.prototype.hasOwnProperty.call(entry, field))
        );
        if (!isValidAppState) return false;
        global.account.appstate = appstateData;
        return true;
    } catch {
        return false;
    }
};
const handleAccountIssues = async () => {
  if (isReconnecting) return;
  isReconnecting = true;

  try {
    const isValidAppState = await checkAccountStatus();
    if (!isValidAppState) {
      logger("Phát hiện vừa bú lồn, tiến hành địt lại...", "[ AUTO-LOGIN ]");
      await global.bypass.handleRelogin();
      return;
    }

    // Tích hợp xử lý cảnh báo Facebook
    var form = {
      av: loginApiData.getCurrentUserID(),
      fb_api_caller_class: "RelayModern",
      fb_api_req_friendly_name: "FBScrapingWarningMutation",
      variables: "{}",
      server_timestamps: "true",
      doc_id: "6339492849481770",
    };

    await new Promise((resolve) => {
      loginApiData.httpPost(
        "https://www.facebook.com/api/graphql/",
        form,
        (e, i) => {
          try {
            const res = JSON.parse(i);
            console.log(res.data.fb_scraping_warning_clear);
            if (e || res.errors) {
              logger("Lỗi không thể xóa cảnh cáo của Facebook.", "error");
            } else if (res.data.fb_scraping_warning_clear.success) {
              logger("Đã vượt cảnh cáo Facebook thành công.", "[ success ]");
              global.handleListen = loginApiData.listenMqtt(listenerCallback);
              setTimeout(
                (_) => (mqttClient.end(), connect_mqtt()),
                1000 * 60 * 60 * 6
              );
            }
          } catch (err) {
            logger("Lỗi xử lý kết quả API Facebook.", "error");
          } finally {
            resolve();
          }
        }
      );
    });

    try {
      await api.getThreadList(1, null, []);
    } catch (apiError) {
      const errorStr = JSON.stringify(apiError);

      if (errorStr.includes("601051028565049")) {
        await global.bypass.handleError(apiError);
      } else if (
        errorStr.includes("Not logged in") ||
        errorStr.includes("Login required") ||
        errorStr.includes("401") ||
        errorStr.includes("Error validating access token")
      ) {
        logger(
          "Phát hiện ăn lồn, tiến hành bú cặc lại...",
          "[ TỰ ĐỘNG BÚ LỒN ]"
        );
        await global.bypass.handleRelogin();
      }
    }
  } finally {
    isReconnecting = false;
  }
}}
function onBot({ models }) {
    function parseCookies(cookies) {
        const trimmed = cookies.includes('useragent=') ? cookies.split('useragent=')[0] : cookies;
        return trimmed.split(';').map(pair => {
                let [key, value] = pair.trim().split('=');
                if (value !== undefined) {
                    return {
                        key,
                        value,
                        domain: "facebook.com",
                        path: "/",
                        hostOnly: false,
                        creation: new Date().toISOString(),
                        lastAccessed: new Date().toISOString()
                    };
                }
            }).filter(item => item !== undefined);
    }
    const data = fs.readFileSync('./cookie.txt', 'utf8');
    var appState = parseCookies(data);
  const loginData = {}
  loginData.appState = appState
  login(loginData, async (loginError, loginApiData) => {    
    if (loginError) {
      logger('Kh�ng th? dang nh?p b?ng appState, ti?n h�nh dang nh?p qua m?t kh?u Facebook!','[ LOGIN-ERROR ]')
      await handleRelogin();
      await new Promise((reset) => setTimeout(reset, 7000))
      logger('B?t d?u kh?i d?ng l?i!', '[ RESTART ]')
      process.exit(1)
    }
loginApiData.setOptions(global.config.FCAOption)
    let loginState = loginApiData.getAppState()
    loginState = JSON.stringify(loginState, null, '\t')
    if (process.env.KEY && global.config.encryptSt) {
      loginState = await encryptState(loginState, process.env.KEY)
      writeFileSync(appStateFile, loginState)
    } else {
      writeFileSync(appStateFile, loginState)
    }
////////////////////////////////////////////
////////////////////////////////////////////
    global.client.api = loginApiData;
    async function stream_url(url) {
    return require('axios')({
         url: url,
         responseType: 'stream',
    }).then(_=>_.data);
};

const path = require('path');
const fs = require('fs');

const globalPath = path.join(__dirname, './modules/commands/cache/global.DB.json');
let globalData = fs.existsSync(globalPath) 
    ? JSON.parse(fs.readFileSync(globalPath)) 
    : { khanhdayr: [], vdanime: [], vdcosplay: [] };

let khanhdayr = globalData.khanhdayr;
let vdanime = globalData.vdanime;
let vdcosplay = globalData.vdcosplay;

global.khanhdayr = khanhdayr;
global.vdanime = vdanime;
global.vdcosplay = vdcosplay;

let toggle = 0;
let status = false;

function saveToFile() {
    fs.writeFileSync(globalPath, JSON.stringify(globalData, null, 2));
}

async function upload(url) {
    return loginApiData.postFormData('https://upload.facebook.com/ajax/mercury/upload.php', {
        upload_1024: await stream_url(url),
    }).then(res => {
        const metadata = JSON.parse(res.body.replace('for (;;);', '')).payload?.metadata?.[0] || {};
        const [key, value] = Object.entries(metadata)[0] || [];
        return [key, value]; 
    });
}

async function processUpload(list, urls) {
    if (status || list.length >= 100) return;
    status = true;
    try {
        const res = await Promise.all(
            [...Array(5)].map(() => upload(urls[Math.floor(Math.random() * urls.length)]))
        );
        list.push(...res);
        saveToFile();
    } catch (err) {
        console.error("Upload error:", err);
    } finally {
        status = false;
    }
}

setInterval(async () => {
    if (toggle === 0) {
        let urls = require('./includes/datajson/vdgai.json');
        await processUpload(khanhdayr, urls);
    } else if (toggle === 1) {
        let animeUrls = require('./includes/datajson/vdanime.json');
        await processUpload(vdanime, animeUrls);
    } else if (toggle === 2) {
        let traiUrls = require('./includes/datajson/vdcosplay.json');
        await processUpload(vdcosplay, traiUrls);
    } 
    toggle = (toggle + 1) % 3;
}, 1000 * 5);   
    global.config.version = '4.6.9'
    global.client.timeStart = new Date().getTime(),
    function() {
      const listCommand = readdirSync(global.client.mainPath + '/modules/commands').filter(command => command.endsWith('.js') && !command.includes('example') && !global.config.commandDisabled.includes(command));
      for (const command of listCommand) {
          try {
              var module = require(global.client.mainPath + '/modules/commands/' + command);
              if (!module.config || !module.run || !module.config.commandCategory) throw new Error(global.getText('mirai', 'errorFormat'));
              if (global.client.commands.has(module.config.name || '')) throw new Error(global.getText('mirai', 'nameExist'));
              if (module.config.dependencies && typeof module.config.dependencies == 'object') {
                  for (const reqDependencies in module.config.dependencies) {
                      const reqDependenciesPath = join(__dirname, 'nodemodules', 'node_modules', reqDependencies);
                      try {
                          if (!global.nodemodule.hasOwnProperty(reqDependencies)) {
                              if (listPackage.hasOwnProperty(reqDependencies) || listbuiltinModules.includes(reqDependencies)) global.nodemodule[reqDependencies] = require(reqDependencies);
                              else global.nodemodule[reqDependencies] = require(reqDependenciesPath);
                          } else '';
                      } catch {
                          var check = false;
                          var isError;
                          logger.loader(global.getText('mirai', 'notFoundPackage', reqDependencies, module.config.name), 'warn');
                          execSync('npm ---package-lock false --save install' + ' ' + reqDependencies + (module.config.dependencies[reqDependencies] == '*' || module.config.dependencies[reqDependencies] == '' ? '' : '@' + module.config.dependencies[reqDependencies]), {
                              'stdio': 'inherit',
                              'env': process['env'],
                              'shell': true,
                              'cwd': join(__dirname, 'nodemodules')
                          });
                          for (let i = 1; i <= 3; i++) {
                              try {
                                  require['cache'] = {};
                                  if (listPackage.hasOwnProperty(reqDependencies) || listbuiltinModules.includes(reqDependencies)) global['nodemodule'][reqDependencies] = require(reqDependencies);
                                  else global['nodemodule'][reqDependencies] = require(reqDependenciesPath);
                                  check = true;
                                  break;
                              } catch (error) {
                                  isError = error;
                              }
                              if (check || !isError) break;
                          }
                          if (!check || isError) throw global.getText('mirai', 'cantInstallPackage', reqDependencies, module.config.name, isError);
                      }
                  }
              }
              if (module.config.envConfig) try {
                  for (const envConfig in module.config.envConfig) {
                      if (typeof global.configModule[module.config.name] == 'undefined') global.configModule[module.config.name] = {};
                      if (typeof global.config[module.config.name] == 'undefined') global.config[module.config.name] = {};
                      if (typeof global.config[module.config.name][envConfig] !== 'undefined') global['configModule'][module.config.name][envConfig] = global.config[module.config.name][envConfig];
                      else global.configModule[module.config.name][envConfig] = module.config.envConfig[envConfig] || '';
                      if (typeof global.config[module.config.name][envConfig] == 'undefined') global.config[module.config.name][envConfig] = module.config.envConfig[envConfig] || '';
                  }
              } catch (error) {
                  throw new Error(global.getText('mirai', 'loadedConfig', module.config.name, JSON.stringify(error)));
              }
              if (module.onLoad) {
                  try {
                      const moduleData = {};
                      moduleData.api = loginApiData;
                      moduleData.models = models;
                      module.onLoad(moduleData);
                  } catch (_0x20fd5f) {
                      throw new Error(global.getText('mirai', 'cantOnload', module.config.name, JSON.stringify(_0x20fd5f)), 'error');
                  };
              }
              if (module.handleEvent) global.client.eventRegistered.push(module.config.name);
              global.client.commands.set(module.config.name, module);
          } catch (error) {
              logger.loader(global.getText('mirai', 'failLoadModule', module.config.name, error), 'error');
          };
      }
  }(),
  function() {
      const events = readdirSync(global.client.mainPath + '/modules/events').filter(event => event.endsWith('.js') && !global.config.eventDisabled.includes(event));
      for (const ev of events) {
          try {
              var event = require(global.client.mainPath + '/modules/events/' + ev);
              if (!event.config || !event.run) throw new Error(global.getText('mirai', 'errorFormat'));
              if (global.client.events.has(event.config.name) || '') throw new Error(global.getText('mirai', 'nameExist'));
              if (event.config.dependencies && typeof event.config.dependencies == 'object') {
                  for (const dependency in event.config.dependencies) {
                      const _0x21abed = join(__dirname, 'nodemodules', 'node_modules', dependency);
                      try {
                          if (!global.nodemodule.hasOwnProperty(dependency)) {
                              if (listPackage.hasOwnProperty(dependency) || listbuiltinModules.includes(dependency)) global.nodemodule[dependency] = require(dependency);
                              else global.nodemodule[dependency] = require(_0x21abed);
                          } else '';
                      } catch {
                          let check = false;
                          let isError;
                          logger.loader(global.getText('mirai', 'notFoundPackage', dependency, event.config.name), 'warn');
                          execSync('npm --package-lock false --save install' + dependency + (event.config.dependencies[dependency] == '*' || event.config.dependencies[dependency] == '' ? '' : '@' + event.config.dependencies[dependency]), {
                              'stdio': 'inherit',
                              'env': process['env'],
                              'shell': true,
                              'cwd': join(__dirname, 'nodemodules')
                          });
                          for (let i = 1; i <= 3; i++) {
                              try {
                                  require['cache'] = {};
                                  if (global.nodemodule.includes(dependency)) break;
                                  if (listPackage.hasOwnProperty(dependency) || listbuiltinModules.includes(dependency)) global.nodemodule[dependency] = require(dependency);
                                  else global.nodemodule[dependency] = require(_0x21abed);
                                  check = true;
                                  break;
                              } catch (error) {
                                  isError = error;
                              }
                              if (check || !isError) break;
                          }
                          if (!check || isError) throw global.getText('mirai', 'cantInstallPackage', dependency, event.config.name);
                      }
                  }
              }
              if (event.config.envConfig) try {
                  for (const configevent in event.config.envConfig) {
                      if (typeof global.configModule[event.config.name] == 'undefined') global.configModule[event.config.name] = {};
                      if (typeof global.config[event.config.name] == 'undefined') global.config[event.config.name] = {};
                      if (typeof global.config[event.config.name][configevent] !== 'undefined') global.configModule[event.config.name][configevent] = global.config[event.config.name][configevent];
                      else global.configModule[event.config.name][configevent] = event.config.envConfig[configevent] || '';
                      if (typeof global.config[event.config.name][configevent] == 'undefined') global.config[event.config.name][configevent] = event.config.envConfig[configevent] || '';
                  }
              } catch (error) {
                  throw new Error(global.getText('mirai', 'loadedConfig', event.config.name, JSON.stringify(error)));
              }
              if (event.onLoad) try {
                  const eventData = {};
                  eventData.api = loginApiData, eventData.models = models;
                  event.onLoad(eventData);
              } catch (error) {
                  throw new Error(global.getText('mirai', 'cantOnload', event.config.name, JSON.stringify(error)), 'error');
              }
              global.client.events.set(event.config.name, event);
          } catch (error) {
              logger.loader(global.getText('mirai', 'failLoadModule', event.config.name, error), 'error');
          }
      }
  }()
  console.log(chalk.bold(co(`có cái đầu buồi`)));
logger.loader(`Clamands Loaded: ${global.client.commands.size}`);
logger.loader(`Events Loaded: ${global.client.events.size}`);
logger.loader('Time start: ' + (Date.now() - global.client.timeStart) / 1000 + 's');

writeFileSync(global.client.configPath, JSON.stringify(global.config, null, 4), 'utf8');

const listenerData = { api: loginApiData, models: models };
const listener = require('./includes/listen')(listenerData);

async function listenerCallback(error, message) {
  if (error) {
    logger('Acc bị logout, đang tiến hành đăng nhập lại!', '[ LOGIN-ACCOUNT ]');
    var _0x50d0db = await global.bypass.handleRelogin();
    _0x50d0db;
    await new Promise((data) => setTimeout(data, 7000));
    process.exit(1);
  }
  if (['presence', 'typ', 'read_receipt'].some((data) => data == message.type)) {
    return;
  }
  return listener(message);
}

global.handleListen = loginApiData.listenMqtt(listenerCallback);
global.client.api = loginApiData
  })
}

(async () => {
  try {
    await sequelize.authenticate()
    const authentication = { Sequelize, sequelize }
    const models = require('./includes/database/model')(authentication)
   logger(global.getText('mirai', 'successConnectDatabase'), '[ DATABASE ]')
    const botData = { models: models }
    onBot(botData)
  } catch (error) {
    logger(global.getText('mirai', 'successConnectDatabase', JSON.stringify(error)), '[ DATABASE ]')
  }
})()
process.on('unhandledRejection', (err, p) => {}).on('uncaughtException', err => { console.log(err);
});

