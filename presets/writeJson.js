/**
 * @since 2016-11-15 21:07
 * @author vivaxy
 */

import path from 'path';
import fsp from 'fs-promise';

export default (options) => {

    const {
        project,
        scaffold,
    } = options;

    return async(filename, data) => {

        const distFolder = project.folder;
        const distFilename = path.join(distFolder, filename);

        await fsp.outputJson(distFilename, data);
    };
};
