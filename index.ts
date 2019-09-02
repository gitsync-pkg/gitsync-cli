#!/usr/bin/env ts-node

import * as yargs from 'yargs';
import * as log from 'npmlog';
import sync from '@gitsync/sync-command';
import commit from '@gitsync/commit-command';
import postCommit from '@gitsync/post-commit-command';
import prePush from '@gitsync/pre-push-command';

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
  .command(postCommit)
  .command(prePush)
  .middleware([
    (argv) => {
      // @ts-ignore
      log.level = argv.logLevel;
    }
  ])
  .strict()
  .help()
  .argv;
