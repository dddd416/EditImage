import commandFactory from '@/factory/command';
import { commandNames } from '@/consts';

const command = {
  name: commandNames.CLEAR_OBJECTS,

  /**
   * 清除所有没有背景（主）图像的对象
   * @param {Graphics} graphics 
   * @returns {Promise}
   */
  execute(graphics) {
    return new Promise((resolve) => {
      this.undoData.objects = graphics.removeAll();
      resolve();
    });
  },

  /**
   * @param {Graphics} graphics 
   * @returns {Promise}
   * @ignore
   */
  undo(graphics) {
    graphics.add(this.undoData.objects);

    return Promise.resolve();
  },
};

commandFactory.register(command);

export default command;
