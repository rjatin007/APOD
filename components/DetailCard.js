import React, { Component } from 'react';

import { Video } from 'expo';
import {
    Text,
    View,
    ImageBackground,
    StyleSheet,
    Modal,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { widthPercentageToDP, heightPercentageToDP } from '../utils/Percents';
const Button = ({ onPressed, text }) => (
    <TouchableOpacity onPress={onPressed} >
        <View style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </View>
    </TouchableOpacity>
)
class DetailCard extends Component {
    state = {
        displayModal: false
    }
    openModal = () => {
        this.setState({ displayModal: true })
    }
    closeModal = () => {
        this.setState({ displayModal: false })
    }
    render() {
        const { displayModal } = this.state;
        const { item } = this.props;
        return (
            <View style={styles.card}>
                {item.media_type === 'video'
                    ? <Video
                        //  some issue with the video url received from api
                        // source={{ uri: item.url }}
                        // following video link works , its not from api though.
                        // just for demonstration purpose i have use it. 
                        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                        isMuted={false}
                        style={styles.video}
                        rate={1.0}
                        volume={1.0}
                        resizeMode={"cover"}
                        useNativeControls={true}
                        isLooping />
                    : <ImageBackground
                        source={{ uri: item.hdurl ? item.hdurl : item.url }}
                        style={styles.backgroundImage}>
                        <View style={styles.imageHeader}>
                            <Text style={styles.title}>{item.date} </Text>
                            <Text style={styles.title}>{item.title} </Text>
                        </View>
                        {displayModal
                            ? (<Modal visible={displayModal}
                                transparent={true}
                                onRequestClose={this.closeModal} animationType="slide">
                                <View style={styles.descriptionContainer}>
                                    <ScrollView style={{ width: '90%', marginTop: 5, marginBottom: 5 }}>
                                        <Text style={styles.description}>{item.explanation}</Text>
                                    </ScrollView>
                                    <Button text='CLOSE' onPressed={this.closeModal} />
                                </View>

                            </Modal>)
                            : <Button text='LEARN MORE' onPressed={this.openModal} />
                        }
                    </ImageBackground>}
            </View>
        )
    }
};
const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: 'center',
        margin: 10,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 5,
        flexWrap: 'wrap'
    },
    title: {
        display: 'flex',
        fontWeight: 'bold',
        color: "#eee",
        marginRight: 5,
        flexWrap: 'wrap',
        textAlign: 'left'
    },
    description: {
        fontSize: 15,
        color: "white",
        fontWeight: 'bold',
        opacity: 0.8,
        margin: 10,
        padding: 2,
        textAlign: 'justify'
    },
    video: {
        flex: 1,
    },
    descriptionContainer: {
        display: 'flex',
        height: heightPercentageToDP('70%'),
        justifyContent: 'space-around',
        alignItems: 'center',
        width: widthPercentageToDP('80%'),
        margin: 10,
        top: '20%',
        left: '7%',
        backgroundColor: 'rgba(5,5,5,0.8)',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#fff'

    },
    button: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,

    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
    }
})
const mapStateToProps = state => ({
    item: state.selectedItem,

})
export default connect(mapStateToProps)(DetailCard);
