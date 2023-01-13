
var A3BC_asm = {
    Prog: ["000", "000", "000", "000", "000", "000", "000", "000"],
    infile: [],
    
    Assemble: function(prog){
        //parse by line
        lines = prog.split(/\r\n|\r|\n/);

        //symbols table
        symtab = [];
        
        //keeping track of line for symtab
        codecount = 0;
        //pass one, fill out symbol table
        for(i=0;i<lines.length;i++)
        {
            //remove comments
            if(lines[i].indexOf('#') >= 0)
            {
                lines[i] = lines[i].substring(0,lines[i].indexOf('#'));
            }
            if(lines[i].indexOf(':') >= 0)
            {
                sym = lines[i].substring(0,lines[i].indexOf(':'));
                symtab.append(sym); //not easy to count lines
            }
            
        }
        
        
        //pass two, assemble
        
    }
    
}