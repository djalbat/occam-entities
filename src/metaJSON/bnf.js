"use strict";

const bnf = `


    document                  ::=  metaJSON error* 
    
                                |  error+ 
                                
                                ;


    metaJSON                  ::=  "{" 
     
                                     "\\"version\\"" ":" version ","
                                      
                                     "\\"repository\\"" ":" repository ","
      
                                     "\\"dependencies\\"" ":" dependencies 
           
                                   "}" ;
      

    version                   ::=  versionNumber ;


    repository                ::=  [string-literal] ;


    dependency.               ::=  name ":" shortenedVersionNumber ;


    dependencies              ::=  "{" 
       
                                     ( dependency ( "," dependency )* )?

                                   "}" ;
      

    name                      ::=  [string-literal] ;


    versionNumber             ::=  /"(?:0|(?:[1-9]\\d*))\\.(?:0|(?:[1-9]\\d*))\\.(?:0|(?:[1-9]\\d*))\\"/ ;
  
  
    shortenedVersionNumber    ::=  /"(?:0|(?:[1-9]\\d*))\\.(?:0|(?:[1-9]\\d*))\\"/ ;
  
  
    error.                    ::=  . ;

`;

export default bnf;
