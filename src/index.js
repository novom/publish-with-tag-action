import core from '@actions/core';
import exec from '@actions/exec';
import github from '@actions/github';

async function publish() {
  try {
    const workingDirectory = core.getInput('working-directory');
    const versionTag = github.context.ref.split('/')[2].split('-');
    const args = ['publish'];
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
      [tag] = versionTag[1].split('.');
      args.push(`--tag=${tag}`);
    }

    if (workingDirectory) {
      await exec.exec('cd', [workingDirectory], options);
    }
    await exec.exec('npm', args, options);
    core.setOutput('version', versionTag.join('-'));
    core.setOutput('tag', tag);
  } catch (error) {
    core.setFailed(error.message);
  }
}

publish();
