'use strict';

import React, {
  StyleSheet,
  View,
} from 'react-native';
import ResponsiveImage from '@exponent/react-native-responsive-image';

import Layout from './Layout';

let { sources, ...iconPropTypes } = ResponsiveImage.propTypes;

export class BackIcon extends React.Component {
  static propTypes = iconPropTypes;

  render() {
    return (
      <ResponsiveImage
        {...this.props}
        sources={{
          1: {
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAAMpJREFUSA3tkj8LQWEUh2++gDJIisJgEXU3u81mtCiTMlmtvp6FxaLbVZRkUAZF/jyn7KfOPVep+9Yz/c7vOe99u0GQnX99gQ4X76d1+S7iK0RpLAiRXuAGPe8FLYRnuIP78zSRHuEBA3A9dWx7eMLQ1YysAjG8YAzuZ43xDVOrOacUT9+8psyZ4zzNJchXLMwWpVggX4EsmSuz5rhIcwOyZGa2KMUy+RZkyUSZNcdVmjuQ33ZktijFBvkBYmUuUVyi3U5kyMo/e4EPEOsfmztz8LMAAAAASUVORK5CYII=',
            isStatic: true,
          },
          2: {
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAAaBJREFUaAXtmD8ohHEYxw9J6uoGi8VgMVksl+FCSUkGMugGXSZsskgWySJZJIvRaDMoStlMFsvVLRYDUUrk/5/PU+9bv57lLonfk+epb+899ft1n+/33t/zdm8m4+UJeAKegCfgCXgCNSXQwqojdItKNe2IaFEOllP0megiIraqKFlWnCTgqYHDqrsiWdAMxzFKweVaQa0o+mqC8ACF8Of0bdGTA9iI9lAIL/d9O4q+GiDcRSH8JX1H9OQA1qMdFMLf0Hei6KsOwm0UwsvM74qePAHcUPB39N1W4FcV/AN9jxX4JQX/RD9gBX5ewb/QD1uBn1bwb/RjVuBlXN4rAxN/AS8g36kPNl2rjX30MkrNVB5SGZXh3N80Q5+AFrjqW2nNmol+gB9R+EssWzMxBPCzMrFgzcQowK/KxKw1E0WA35WJKWsmJgGWMZueCflcsmZiJjAgRuQpPW7NxJwyIedjxJqJRWVCJtWgNRMryoQ8M3qtmVhXJsrWDAjvVmDi7KcMyCuQ36p9vkj+aspbCjngV8jLE/AEPAFPwBP43wl8AQAshIJ1ZrnJAAAAAElFTkSuQmCC',
            isStatic: true,
          },
          3: {
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAArZJREFUeAHtmk2oTWEUhq9/IkIIkUikSJIkJZQYiYGMZCIZyUwpg5uBksHNSJkoJRIxkIkYMJFE6pKfQgghIj/5fVadtxbdvWfq6l2r3t7V+r7BeZ/OPufs/Z2urqoiUASKQBEoAkWgCBSBIlAEikARKAL9jMCgfvZ6ml7OahY2oM/oRdMm13kPwX919B3f6Aqir9wHO2AEKPxGXxsdZ/v6gBOA7jnC+DvzngY4ASjWrGsX6fMllfvjrA10prOjBc4Z1gY7w9lK+J8ov2PUn2c+FNnWZpL/QAKS/SLz4bZkCB4/AL+hDEX9FeYjkW2tI/lXJCDZrzEfbUuG4KtQ3DpkKOpvMh+LbGs5yT8iAcney3yCLRmCL0HvUYai/j7zyci2FpL8LRKQ7I+YT0O2NY/kr1CGov4p85m2ZAg+Gz1HApI9nu/MQbY1g+RPUIai/jXz+ci2ppL8IRKQ7O+YL7IlQ/BJ6C7KUNR/YL4U2dZ4kt9GApL9E/MVtmQ6wU83wPnCfI07nCEAaLr5rAfunXdHfDvly0r9Keb/y1FTJ8q/sW0NgALUMWT92FTI97ZAOsLaAG109v0tkA45g8nZe1ogHcgbnfvDLZC6ncEoe3zeHG2BtFsbnT2+3k+0QNrpDEfZ40fk2RZI27XR2YcR/kIDpDg43OIMR9lH0FxC+oWdPf4DtEkbnX0U4a+iDEd93Mutd4aj7GNoriOByR4Himu10dnHEf4WynDUx7Ojlc5wlH0izR0kMNnjgHGZNjr7FMI/QBmO+jhoXOwMR9mn0zxGApP9DfMF2ujsswj/DGU46l8yj3X7mguBgCEw2c/Z0+kAiMspLqsMJ/o4hKzqEIgP5jhgzJBOFp0/CQSkXhT3aZeR9d9jyN9Y1v9ybaRSC0WgCBSBIlAEikARKAJFoAgUgSLgR+A3biEq4y5/mBAAAAAASUVORK5CYII=',
            isStatic: true,
          },
        }}
        style={[styles.backIcon, this.props.style]}
      />
    );
  }
}

let styles = StyleSheet.create({
  backIcon: {
    width: 13,
    height: 21,
    marginTop: 11 + Layout.pixel,
    marginLeft: 8,
  },
});
