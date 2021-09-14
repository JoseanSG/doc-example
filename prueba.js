import {createReport} from 'docx-templates';
import fs from 'fs';

const template = fs.readFileSync('prueba1.docx');

const lista = [
  {elemento: "elemento1"},
  {elemento: "elemento2"},
  {elemento: "elemento3"}
]
const buffer = await createReport({
  template,
  data: {
    lista
  }
});

fs.writeFileSync('report.docx', buffer)




