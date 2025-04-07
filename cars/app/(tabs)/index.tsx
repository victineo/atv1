import { Image, StyleSheet, Platform, View, Text } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>  Objeto</Text>
            <View style={styles.card}>
                <Image
                    source={require('@/assets/images/fusion.jpg')}
                    style={styles.imageCar}
                />
                <Text style={styles.description}> Ford Fusion</Text>
                <Text style={styles.description}> Ano: 2010</Text>
                <Text style={styles.description}> Cor: Preto</Text>
            </View>
            <View style={styles.card}>
                <Image
                    source={require('@/assets/images/208.jpg')}
                    style={styles.imageCar}
                />
                <Text style={styles.description}> Peugeot 208</Text>
                <Text style={styles.description}> Ano: 2022</Text>
                <Text style={styles.description}> Cor: Prata</Text>
            </View>
            <View style={styles.card}>
                <Image
                    source={require('@/assets/images/cronos.png')}
                    style={styles.imageCar}
                />
                <Text style={styles.description}> Fiat Cronos</Text>
                <Text style={styles.description}> Ano: 2022</Text>
                <Text style={styles.description}> Cor: Prata</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        fontFamily: 'Poppins',
        backgroundColor: '#d3d3d3',
        marginTop: 32,
        height: "100%",
    },
    titulo: {
        fontSize: 24,
        color: 'black',
        backgroundColor: 'white',
        fontWeight: 'bold',
        height: 70,
        marginBottom: 8,
        textAlign: 'center',
    },
    card: {
        backgroundColor: 'white',
        height: "auto",
        margin: 8,
        borderRadius: 8,
    },
    imageCar: {
        width: 'auto',
        height: 200,
        borderRadius: 8,
    },
    description: {
        padding: 4,
        fontSize: 18,
    },
});
