import * as yargs from 'yargs';
import * as log from 'npmlog';
import sync from '@gitsync/sync-command';
import commit from '@gitsync/commit-command';

yargs
  .options({
    'log-level': {
      describe: 'The level to display logs at',
      type: 'string'
    }
  })
  .command(sync)
  .command(commit)
  .middleware([
    (argv) => {
      // @ts-ignore
      log.level = argv.logLevel || 'warn';
    }
  ])
  .strict()
  .help()
  .argv;
