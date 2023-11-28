
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import './App.css';
import MyDocument from './Download';
import { Button } from 'antd';
function App() {

  const data = {
    "profissional": {
      "id": "6324e36c-3b3d-48c8-b215-4d9046ea9ba6",
      "name": "Felipe Freire"
    },

    "beneficiario": "Otto",
    "operator": [
      {
        "value": "3",
        "label": "Operadora 3"
      }
    ],
    "data_criacao": "27/11/2023",
    "data_exame": "28/11/2023",
    "hipoteseDiagnostica": "fdsfdsfdsfdsfdsfdsfds"
  }

  function enviar(data: any) {
    console.log(data)
  }

  return (
    <div>
      <PDFDownloadLink document={<MyDocument data={data} />} fileName="documento.pdf" onClick={() => enviar(data)}>
        <Button>Finalizar</Button>
      </PDFDownloadLink>
      <PDFViewer width={1000} height={1000}>
        <MyDocument data={data} />
      </PDFViewer>

    </div>
  );
}

export default App
