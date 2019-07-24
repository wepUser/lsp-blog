const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const moduleFileExtensions = [
    'web.mjs',
    'mjs',
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
];

const resolveModule = (resolveFn, filePath) => {
    const extension = moduleFileExtensions.find(extension =>
        fs.existsSync(resolveFn(`${filePath}.${extension}`))
    );

    if (extension) {
        return resolveFn(`${filePath}.${extension}`);
    }

    return resolveFn(`${filePath}.js`);
};

module.exports={
    appPackageJson: resolveApp('package.json'),
    appIndexHtml: resolveApp('src/index.html'),
    appIndexJs: resolveModule(resolveApp, 'src/index'),
    appBuild: resolveApp('build'),
    appPath: resolveApp('.'),
    appSrc: resolveApp('src'),
    appPublic: resolveApp('public'),
};