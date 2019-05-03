import '@react-native-firebase/storage';
import '@react-native-firebase/perf';
import '@react-native-firebase/functions';

import { firebase } from '@react-native-firebase/analytics';

const foo = async () => {
  const task = firebase
    .app()
    .storage('gs://foo')
    .ref('foo')
    .putFile('');

  task.finally

  task.on(firebase.storage.TaskEvent.STATE_CHANGED, taskSnapshot => {
    if (taskSnapshot.state === firebase.storage.TaskState.) {
      console.log('cancelling task!');
      taskSnapshot.task.cancel();
    }
  });

  task.catch(e => {
    return 'bar';
  });

  task.then(snapshot => {
    snapshot.metadata.bucket;
    return 'foo';
  });

  firebase.storage.TaskState.CANCELLED;
  firebase.storage.TaskEvent.STATE_CHANGED;
  firebase.perf().newHttpMetric('', 'GET');
  // firebase.functions.HttpsErrorCode.ABORTED;
};

foo();
