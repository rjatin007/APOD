import React from 'react';
import { View } from 'react-native';
import { widthPercentageToDP } from '../utils/Percents';
const EmptyComponent = () => (
    <View style={{
        width: widthPercentageToDP('48%'),
        height: 300,
        margin: 5,
        backgroundColor: 'transparent'
    }}>
    </View>
);



export default EmptyComponent;
