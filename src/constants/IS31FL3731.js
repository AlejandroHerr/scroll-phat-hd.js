export const REGISTER = {
  CONFIGURATION: 0x00,
  PICTURE_DISPLAY: 0x01,
  AUTO_PLAY_1: 0x02,
  AUTO_PLAY_2: 0x03,
  DISPLAY_OPTION: 0x05,
  AUDIO_SYNC: 0x06,
  FRAME: 0x07,
  BREATH_CONTROL_1: 0x08,
  BREATH_CONTROL_2: 0x09,
  SHUTDOWN: 0x0a,
  AGC_CONTROL: 0x0b,
  AUDIO_ADC: 0x0c,
  BANK: 0xfd,
};

export const BANK = {
  PAGE_ONE: 0x00,
  PAGE_TWO: 0x01,
  FUNCTION: 0x0b,
};

export const FUNCTION = {
  PICTURE: 0x00,
  AUTO_FRAME_PLAY: 0x01,
};

export const AUDIO_SYNC = {
  OFF: 0x00,
  ON: 0x01,
};

export const SHUTDOWN = {
  ON: 0x00,
  OFF: 0x01,
};
