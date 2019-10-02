/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      let weeks;
      if (knowsProgramming) {
        weeks=800/Number(config[focus]);
        
        }
     else weeks=1300/Number(config[focus]);
     
      return Math.ceil(weeks);
  };
  