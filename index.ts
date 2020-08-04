import * as yargs from 'yargs';
import * as npmlog from 'npmlog';
import sync from '@gitsync/sync-command';
import {default as imp} from '@gitsync/import-command';
import commit from '@gitsync/commit-command';
import postCommit from '@gitsync/post-commit-command';
import postMerge from '@gitsync/post-merge-command';
import prePush from '@gitsync/pre-push-command';
import push from '@gitsync/push-command';
import update from '@gitsync/update-command';
import exec from '@gitsync/exec-command';
import ci from '@gitsync/ci-command';
import log from '@gitsync/log';
import git from 'git-cli-wrapper';

export default yargs
  .parserConfiguration({
    'populate--': true,
  })
  .options({
    'log-level': {
      group: 'Global Options:',
      describe: 'The level to display logs at',
      type: 'string',
      default: 'info',
    },
  })
  .command(sync)
  .command(imp)
  .command(commit)
  .command(update)
  .command(postCommit)
  .command(postMerge)
  .command(prePush)
  .command(push)
  .command(exec)
  .command(ci)
  .middleware([
    argv => {
      // @ts-ignore
      npmlog.level = argv.logLevel;
      git.logger = log;
    },
  ])
  .strict()
  .help();
