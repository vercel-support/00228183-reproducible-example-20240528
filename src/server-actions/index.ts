export async function _getUser(){
  console.log("Starting async function 2");
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log("Completed async function 2");
  return {ok:true};
}