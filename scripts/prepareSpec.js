const path = require('path');

const fs = require('fs-extra');

const spawn = require('cross-spawn');

console.info('Removing any old artifacts from spec');

fs.removeSync('spec/myplugin');
fs.removeSync('spec/plugins');
fs.removeSync('spec/platforms');

const myplugin = path.join('spec', 'myplugin');


fs.ensureDirSync(myplugin);

['package.json', 'plugin.xml'].forEach((src) => {
  const dest = path.join(myplugin, src);
  fs.copySync(src, dest);
});

['scripts', 'src', 'www'].forEach((src) => {
  const dest = path.join(myplugin, src);
  fs.ensureDirSync(dest);
  fs.copySync(src, dest);
});

const args = 'plugin add myplugin';



spawn.sync('cordova', args.split(' '), {
  cwd: 'spec',
  stdio: 'inherit',
});

