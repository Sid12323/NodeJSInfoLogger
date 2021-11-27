const levels = ['[SILLY]: ','[INFO]: ','[WARN]: ','[ERROR]: ','[FATAL]: '];
function infoLogger(infoLogger, level, time) {
  var levell = levels[level];
  if (time) {
    var timee = new Date();
    console.log(levell+timee+' | '+infoLogger);
  } else {
    console.log(levell+infoLogger);
  }
}
module.exports = {infoLogger}
