const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

async function publish() {
  try {
    const versionTag = github.context.ref.split('/')[2].split('-');
    let args = ['publish'];
    let tag = 'latest';
    const options = {
      listeners: {
        stdout: (data) => {
          console.log(data.toString());
        },
      },
    };

    if (versionTag.length === 1) {
      console.log('Release is stable');
    } else {
      console.log('Release is a pre-release');
      tag = versionTag[1].split('.')[0];
      args.push('--tag=' + tag);
    }

    await exec.exec('npm', args, options);
    core.setOutput('version', versionTag.join('-'));
    core.setOutput('tag', tag);
  } catch (error) {
    core.setFailed(error.message);
  }
}

publish();
