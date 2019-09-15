import * as yargs from 'yargs';
import * as log from 'npmlog';
import sync from '@gitsync/sync-command';
import commit from '@gitsync/commit-command';
import postCommit from '@gitsync/post-commit-command';
import prePush from '@gitsync/pre-push-command';
import update from '@gitsync/update-command';
import git from "git-cli-wrapper";

export default yargs
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
  .command(update)
  .command(postCommit)
  .command(prePush)
  .middleware([
    (argv) => {
      // @ts-ignore
      log.level = argv.logLevel;
      git.logger = log;
    }
  ])
  .strict()
  .help();
