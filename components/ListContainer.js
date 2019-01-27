import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import ListCard from './ListCard';
import EmptyComponent from './EmptyComponent';


const formattedData = data => {
    const fullRows = Math.floor(data.length / 2);
    let elementsInLastRow = data.length - (fullRows * 2);
    while (elementsInLastRow !== 2 && elementsInLastRow !== 0) {
        data.push({ key: `blank-${elementsInLastRow}`, empty: true });
        elementsInLastRow++;
    }
    return data;
}
const ListContainer = ({ data }) => {
    return (
        <View style={styles.container}>
            {data.length > 0 &&
                <FlatList
                    data={formattedData(data)}
                    numColumns={2}
                    renderItem={({ item }) =>
                        (item.empty && item.empty === true)
                            ? <EmptyComponent />
                            : <ListCard item={item} />
                    }
                />
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default ListContainer;