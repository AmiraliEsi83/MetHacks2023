
const axios = window.axios
var api_key = 'Bearer A932FiAjo2eN7EQLUavwOJBh1KpeF8i6TOjG6ujw';

async function askQuestionAPIcall(manufacturer, model, year, question) {
    var ans

    console.log("f called");

        
    var promptText = "My friend has a " + manufacturer + " " + model + " and the build year is " + year + ". He has a question about it. here it is: " + question;

    const theReq = {
    method: 'POST',
    url: 'https://api.cohere.ai/v1/generate',
    headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: api_key

    },
    data: {
        prompt: promptText,
        num_generations: 1,

        model: 'command-xlarge-nightly',
        max_tokens: 300,
        return_likelihoods: 'NONE',
        truncate: 'END',
    }
    };

    // console.log(theReq.data['prompt'])
    ans = await axios.request(theReq)
    ans = ans.data.generations[0].text.replace(/(\r\n|\n|\r)/gm,"");

    return(ans);

}