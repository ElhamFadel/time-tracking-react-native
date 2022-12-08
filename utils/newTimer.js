import {
    v4 as uuidv4
} from 'uuid';

export const newTimer = (attrs = {}) => {
    const timer = {
        title: attrs.title || 'Timer',
        project: attrs.project || 'Project',
        id: uuidv4(),
        elapsed: 0,
        isRunning: false,
    };
    return timer;
};

export default newTimer;