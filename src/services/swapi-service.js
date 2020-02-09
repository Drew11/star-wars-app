class SwapiService {

    _url= 'https://swapi.co/api';

    async getSource (urlRoute){
        const promise = await fetch(`${this._url}${urlRoute}` , {
            mode: "cors"
        });

        if(!promise.ok){
            throw new Error(`Could not fetch ${urlRoute}, received ${promise.status}`)
        }

        const body = await promise.json();
        return body
    }

    getId(item){
        const idRegExp = /\/([0-9]*)\/$/;
        const res =  item.url.match(idRegExp)[1];
        return res;
    };

    getAllFilms = async () => {
        const films = await this.getSource('/films/');
        return films.results;
    };

    anAsyncFunction = async item => {
        item = item.substring(this._url.length, item.length);
        const res = await this.getSource(item);
        return res;
    };

    getAllQuery = async (list) => {
        return Promise.all(list.map(item => this.anAsyncFunction(item)))
    };
}

export default SwapiService;