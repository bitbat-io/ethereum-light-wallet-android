import { StyleSheet } from 'react-native';
import { PRIMARY, TEXT_COLOR, DARK_GREY } from '../Constants/color.constants';
import { WIDTH, HEIGHT } from '../Utils/dimensions.utils';

export const SceneCommonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY,
        padding: 15
    },
})

export const TextStyles = StyleSheet.create({
    h1Light: {
        fontWeight: '300',
        fontSize: 24,
        color: TEXT_COLOR,
    },
    h2Light: {
        fontWeight: '300',
        fontSize: 23,
        color: TEXT_COLOR,
    },
    h1Bold: {
        fontWeight: '700',
        fontSize: 24,
        color: TEXT_COLOR,
    },
    normalGrey: {
        fontSize: 16,
        color: DARK_GREY,
    },
    normalGreyBig: {
        fontSize: 24,
        color: DARK_GREY,
    },
    message: {
        fontSize: 14,
        color: TEXT_COLOR
    },
    messageGrey: {
        fontSize: 14,
        color: DARK_GREY,
    }
});

export const ButtonStyles = StyleSheet.create({
    buttonWrap: {
        width: WIDTH - 50,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: WIDTH,
    },
    buttonText: {
        fontSize: 19,
        fontWeight: '300',
        color: PRIMARY
    }
})

export const InputBoxStyle = StyleSheet.create({
    inputBox: {
        width: WIDTH - 50,
        height: 150,
        backgroundColor: 'transparent',
        fontSize: 30,
        fontWeight: '700',
        color: TEXT_COLOR,
    }
})