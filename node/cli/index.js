// const { Command } = require('commander');
// const program = new Command();

// program
//   .name('string-util')
//   .description('CLI to some JavaScript string utilities')
//   .version('0.8.0');

// program.command('ayushman')
//   .description('Split a string into substrings and display as an array')
//   .argument('<string>', 'string to split')
//   .option('--father', 'ashvani kumar gupta ')
//   .option('-s, --separator <char>', 'separator character', ',')
//   .action((str, options) => {
//     const limit = options.first ? 1 : undefined;
//     console.log(str.split(options.separator, limit));
//   });

// program.parse();

const fs =require('fs');
let total=0;
function reading(filename){
fs.readFile(filename,'utf-8',(err,data)=>{
   if (err) {
    cobsole.log(err)
   } else {
  for(let i=0; i<data.length; i++){
    if(data[i]==" "){
        total++;
    }
  }
  console.log(data.length,total)
   }
})
}

reading('a.txt');