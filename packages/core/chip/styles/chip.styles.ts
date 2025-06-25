 import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    chipContainer: {
        alignItems: 'flex-start',
    },
    chipWrapper: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginBottom: 12,
        flexWrap: 'wrap',
    },
    hasHorizonatalScroll: {
        flexWrap: 'nowrap',
    },
    chip: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginRight: 12,
        marginBottom: 12,
    },
    chipContent: {
        flexWrap: 'nowrap',
        paddingHorizontal: 12,
        borderRadius: 14,
        borderCurve: 'continuous',
        minHeight: 34,
        minWidth: 34,
        alignItems: 'center',
        borderWidth: 1,
        justifyContent: 'center',
    },
    baseTextColor: {
         color: "#787a87",
    },
    baseTextColorSelected: {
        color: "#0471DB",
    },
    primarySelectedTextStyle: {
        color: "#ffffff",
    },
    outlineSelectedStyle: {
        borderColor: "#0471DB",
    },
    outlineStyle: {
        borderColor: "#d0d0d0",
    },
    primaryStyle: {
        borderColor: "#dceeff",
        backgroundColor: "#dceeff",
    },
    primarySelectedStyle: {
        borderColor: "#0471DB",
        backgroundColor: "#0471DB",
    },
    clearStyle: {
        borderColor: 'transparent',
    },
    clearSelectedStyle: {
        borderColor: 'transparent',
    },
    labelTextStyle: {
        fontSize: 16,
        fontWeight: "400",
        color: "#717171",
        lineHeight: 1.5,
        minHeight: 45,
        display: 'flex',
        alignItems: 'center',
    },
    hasMaxWidth: {
        ...Platform.select({
            web: {
                maxWidth: '100%',
            },
        }),
    },
});
