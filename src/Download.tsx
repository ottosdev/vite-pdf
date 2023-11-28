import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Line, BlobProvider } from '@react-pdf/renderer';

// Crie estilos
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 30,
    fontSize: '12px'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #000'
  },
  logo: {
    width: 50,
    height: 50,
  },
  textRight: {
    textAlign: 'right',
    marginRight: 10,
  },
  content: {
    flexGrow: 1,
    margin: 10,
    padding: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  leftFooter: {
    textAlign: 'left',
  },
  rightFooter: {
    textAlign: 'center',
    alignItems: 'center',
    gap: 4
  },
  signatureLine: {
    marginTop: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderBottomStyle: 'solid',
    width: 200
  },
  // ... outros estilos
});


// Crie um componente de documento
const MyDocument = ({ data }: any) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Image style={styles.logo} src="src/assets/birdid.png" />
        <Text style={styles.textRight}>{data.profissional.name}</Text>
      </View>
      <View style={styles.content}>
        <Text>Beneficiário: {data.beneficiario}</Text>
        <Text>Operadora: {data.operator[0].label}</Text>
        <Text>Hipótese Diagnóstica: {data.hipoteseDiagnostica}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.leftFooter}>
          <Text>Data de Criação: {data.data_criacao}</Text>
          <Text>Data do Exame: {data.data_exame}</Text>
        </View>
        <View style={styles.rightFooter}>
          <View style={styles.signatureLine} />
          <Text>Assinatura</Text>
        </View>
      </View>
    </Page>
  </Document>


);


export default MyDocument;
