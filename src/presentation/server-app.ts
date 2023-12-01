import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  fileName: string;
  destination: string;
}

export class serverApp {
  static run({ base, limit, showTable, fileName, destination }: RunOptions) {
    const table = new CreateTable().execute({ base, limit });
    const wasSaved = new SaveFile().execute({
      fileContent: table,
      fileDestination: destination,
      fileName,
    });

    if (showTable) {
      console.log(table);
    }

    wasSaved ? console.log("File Created!!") : console.log("File not created");
  }
}
