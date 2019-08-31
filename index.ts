#!/usr/bin/env ts-node

import * as yargs from 'yargs';
import * as log from 'npmlog';
import sync from '@gitsync/sync-command';
import commit from '@gitsync/commit-command';

yargs
  .options({
    'log-level': {
      group: 'Global Options:',
      describe: 'The level to display logs at',
      type: 'string',
      default: 'info'
    }
  })
  .command(sync)
  .command(commit)
  .middleware([
    (argv) => {
      // @ts-ignore
      log.level = argv.logLevel;
    }
  ])
  .strict()
  .help()
  .argv;
