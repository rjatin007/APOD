import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import { Video } from 'expo';
import { widthPercentageToDP } from '../utils/Percents';
import { connect } from 'react-redux';
import { selectItem, mute } from '../store/actions';

class ListCard extends Component {
    selectAnItem = () => {
        const { item, selectItem, navigation, mute } = this.props
        selectItem(item);
        navigation.navigate('Details');
        mute();
    }

    render() {
        const { item, isMuted } = this.props;
        return (
            <TouchableOpacity onPress={this.selectAnItem} style={{ flex: 1 }}>
                <View style={styles.card}>

                    {item.media_type === 'video'
                        ? <Video
                            // some issue with the video url received from api
                            // source={{ uri: item.url }}
                            // following video link works , its not from api though.
                            // just for demonstration purpose i have use it.
                            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                            style={styles.video}
                            rate={1.0}
                            isMuted={isMuted}
                            volume={1.0}
                            resizeMode={"cover"}
                            shouldPlay />
                        : <ImageBackground
                            source={{ uri: item.url }}
                            style={styles.backgroundImage}>
                            <Text style={styles.date}>{item.date} </Text>
                            <Text style={styles.title}>{item.title} </Text>
                        </ImageBackground>}
                </View>
            </TouchableOpacity>

        )
    }

}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        margin: 5,
    },
    backgroundImage: {
        resizeMode: 'contain',
        width: widthPercentageToDP('48%'),
        height: 300,
        justifyContent: 'space-between',
        alignItems: 'flex-start',

    },
    date: {
        fontWeight: 'bold',
        color: "#eee",
        margin: 15,
        width: '100%',
    },
    title: {
        display: 'flex',
        width: '90%',
        fontWeight: 'bold',
        color: "#eee",
        margin: 10,
        textAlign: 'center',
        flexWrap: 'wrap'

    },
    video: {
        width: widthPercentageToDP('48%'),
        height: 300,
    }
})

const mapStateToProps = (state, ownProps) => ({
    navigation: state.navigation,
    item: ownProps.item,
    isMuted: state.isMuted
})
const mapDispatchToProps = dispatch => ({
    selectItem: (item) => dispatch(selectItem(item)),
    mute: () => dispatch(mute())
})
export default connect(mapStateToProps, mapDispatchToProps)(ListCard);



