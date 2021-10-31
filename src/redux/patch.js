import { controls } from '../mininova';

const PATCH_CONTROL_CHANGED = 'PATCH_CONTROL_CHANGED';
const PATCH_DUMP_RECEIVED = 'PATCH_DUMP_RECEIVED';

export const patchControlChanged = (id, value) => (
  {
    type: PATCH_CONTROL_CHANGED,
    payload: {
      id,
      value,
    },
  }
);

export const patchDumpReceived = data => (
  {
    type: PATCH_DUMP_RECEIVED,
    payload: {
      data,
    },
  }
);

const initialState = [];
for (let [id, control] of Object.entries(controls)) {
  initialState[id] = control.init;
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PATCH_DUMP_RECEIVED:
      var name = '';
      for (var i=15;i<31;i++) {
          name += String.fromCharCode(action.payload.data[i]);
      }
      console.log("NAME: ",name);
      return {
        ...state,
        'patch-name':name,
        'osc-vibrato-depth': action.payload.data[42],
        'osc-vibrato-speed': action.payload.data[41],
        'osc-drift': action.payload.data[43],
        'osc-phase': action.payload.data[44],
        'osc-fixed-note': action.payload.data[45],
        'osc-1-wave': action.payload.data[46],
        'osc-1-semitones': action.payload.data[53],
        'osc-1-cents': action.payload.data[54],
        'osc-1-vsync': action.payload.data[49],
        'osc-1-pwwti': action.payload.data[48],
        'osc-1-hardness': action.payload.data[50],
        'osc-1-density': action.payload.data[51],
        'osc-1-densitydetune': action.payload.data[52],
        'osc-1-pitch': action.payload.data[55],
        'osc-1-wtint': action.payload.data[47],
        'osc-2-wave': action.payload.data[56],
        'osc-2-semitones': action.payload.data[63],
        'osc-2-cents': action.payload.data[64],
        'osc-2-vsync': action.payload.data[59],
        'osc-2-pwwti': action.payload.data[58],
        'osc-2-hardness': action.payload.data[60],
        'osc-2-density': action.payload.data[61],
        'osc-2-densitydetune': action.payload.data[62],
        'osc-2-pitch': action.payload.data[65],
        'osc-2-wtint': action.payload.data[57],
        'osc-3-wave': action.payload.data[66],
        'osc-3-semitones': action.payload.data[73],
        'osc-3-cents': action.payload.data[74],
        'osc-3-vsync': action.payload.data[69],
        'osc-3-pwwti': action.payload.data[68],
        'osc-3-hardness': action.payload.data[70],
        'osc-3-density': action.payload.data[71],
        'osc-3-densitydetune': action.payload.data[72],
        'osc-3-pitch': action.payload.data[75],
        'osc-3-wtint': action.payload.data[67],
        'osc-1-level': action.payload.data[76],
        'osc-2-level': action.payload.data[77],
        'osc-3-level': action.payload.data[78],
        'ring-mod-level-1-3': action.payload.data[79],
        'ring-mod-level-2-3': action.payload.data[80],
        'noise-level': action.payload.data[81],
        'noise-type': action.payload.data[82],
        'filter-routing': action.payload.data[86],
        'filter-balance': action.payload.data[87]-64,
        'filter-freqlink':action.payload.data[88]&1,
        'filter-reslink': action.payload.data[88]&1-1,
        'filter-1-drive': action.payload.data[89],
        'filter-1-drive-type': action.payload.data[90],
        'filter-1-type': action.payload.data[91],
        'filter-1-track': action.payload.data[93],
        'filter-1-resonance': action.payload.data[94],
        'filter-1-frequency': action.payload.data[92],
        'filter-1-qnormalize': action.payload.data[95],
        'filter-1-env2-to-freq': action.payload.data[96],
        'filter-2-drive': action.payload.data[97],
        'filter-2-drive-type': action.payload.data[98],
        'filter-2-type': action.payload.data[99],
        'filter-2-track': action.payload.data[100],
        'filter-2-resonance': action.payload.data[103],
        'filter-2-frequency': action.payload.data[101],
        'filter-2-qnormalize': action.payload.data[104],
        'filter-2-env2-to-freq': action.payload.data[102],

        'env-1-attack': action.payload.data[116],
        'env-1-decay': action.payload.data[117],
        'env-1-sustain': action.payload.data[118],
        'env-1-release': action.payload.data[119],
        'env-1-trigger': action.payload.data[112]&1,
        'env-1-velocity': action.payload.data[115],
        'env-1-sustain-rate': action.payload.data[120],
        'env-1-sustain-time': action.payload.data[121],
        'env-1-ad-repeats': action.payload.data[122],
        'env-1-attack-track': action.payload.data[123],
        'env-1-decay-track': action.payload.data[124],
        'env-1-level-track': action.payload.data[125],
        'env-1-attack-slope': action.payload.data[126],
        'env-1-decay-slope': action.payload.data[127],
        'env-1-anim-trigger': action.payload.data[128],

        'env-2-attack': action.payload.data[130],
        'env-2-decay': action.payload.data[131],
        'env-2-sustain': action.payload.data[132],
        'env-2-release': action.payload.data[133],
        'env-2-trigger': action.payload.data[112]&2 > 0 ? 1 : 0,
        'env-2-velocity': action.payload.data[129],
        'env-2-sustain-rate': action.payload.data[134],
        'env-2-sustain-time': action.payload.data[135],
        'env-2-ad-repeats': action.payload.data[136],
        'env-2-attack-track': action.payload.data[137],
        'env-2-decay-track': action.payload.data[138],
        'env-2-level-track': action.payload.data[139],
        'env-2-attack-slope': action.payload.data[140],
        'env-2-decay-slope': action.payload.data[141],
        'env-2-anim-trigger': action.payload.data[142],

        'env-3-delay': action.payload.data[143],
        'env-3-attack': action.payload.data[144],
        'env-3-decay': action.payload.data[145],
        'env-3-sustain': action.payload.data[146],
        'env-3-release': action.payload.data[147],
        'env-3-trigger': action.payload.data[112]&4>0?1:0,
        'env-3-sustain-rate': action.payload.data[148],
        'env-3-sustain-time': action.payload.data[149],
        'env-3-ad-repeats': action.payload.data[150],
        'env-3-attack-track': action.payload.data[151],
        'env-3-decay-track': action.payload.data[152],
        'env-3-level-track': action.payload.data[153],
        'env-3-attack-slope': action.payload.data[154],
        'env-3-decay-slope': action.payload.data[155],
        'env-3-anim-trigger': action.payload.data[156],

        'env-4-delay': action.payload.data[157],
        'env-4-attack': action.payload.data[158],
        'env-4-decay': action.payload.data[159],
        'env-4-sustain': action.payload.data[160],
        'env-4-release': action.payload.data[161],
        'env-4-trigger': action.payload.data[112]&8>0?1:0,
        'env-4-sustain-rate': action.payload.data[162],
        'env-4-sustain-time': action.payload.data[163],
        'env-4-ad-repeats': action.payload.data[164],
        'env-4-attack-track': action.payload.data[165],
        'env-4-decay-track': action.payload.data[166],
        'env-4-level-track': action.payload.data[167],
        'env-4-attack-slope': action.payload.data[168],
        'env-4-decay-slope': action.payload.data[169],
        'env-4-anim-trigger': action.payload.data[170],

        'env-5-delay': action.payload.data[171],
        'env-5-attack': action.payload.data[172],
        'env-5-decay': action.payload.data[173],
        'env-5-sustain': action.payload.data[174],
        'env-5-release': action.payload.data[175],
        'env-5-trigger': action.payload.data[112]&16 > 0 ? 1 : 0,
        'env-5-sustain-rate': action.payload.data[176],
        'env-5-sustain-time': action.payload.data[177],
        'env-5-ad-repeats': action.payload.data[178],
        'env-5-attack-track': action.payload.data[179],
        'env-5-decay-track': action.payload.data[180],
        'env-5-level-track': action.payload.data[181],
        'env-5-attack-slope': action.payload.data[182],
        'env-5-decay-slope': action.payload.data[183],
        'env-5-anim-trigger': action.payload.data[184],

        'env-6-delay': action.payload.data[185],
        'env-6-attack': action.payload.data[186],
        'env-6-decay': action.payload.data[187],
        'env-6-sustain': action.payload.data[188],
        'env-6-release': action.payload.data[189],
        'env-6-trigger': action.payload.data[112]&32 > 0 ? 1 : 0,
        'env-6-sustain-rate': action.payload.data[190],
        'env-6-sustain-time': action.payload.data[191],
        'env-6-ad-repeats': action.payload.data[192],
        'env-6-attack-track': action.payload.data[193],
        'env-6-decay-track': action.payload.data[194],
        'env-6-level-track': action.payload.data[195],
        'env-6-attack-slope': action.payload.data[196],
        'env-6-decay-slope': action.payload.data[197],
        'env-6-anim-trigger': action.payload.data[198],

      };
    case PATCH_CONTROL_CHANGED:
      return {
        ...state,
        [action.payload.id]: action.payload.value,
      };
    default:
      return state;
  }
};
