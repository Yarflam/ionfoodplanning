import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ImgWebService {

	/* Enregistré sur le serveur Amazon EC2 Europe West */
	private readonly WEBSERVICE_URL = 'http://ec2-35-180-47-238.eu-west-3.compute.amazonaws.com:4200/';
	private readonly WEBSERVICE_KEY = '0ed7a7d90f6056b105e176f72275f27b3cfc10f3';

	constructor(private http: Http) { }

	/* Enregistrer une image */
	SaveImage(file, callback: Function): void {
		const ws = this;
		const fReader = new FileReader();
		fReader.addEventListener('load', function(event) {
			ws.AddImage({
				'name': file.name,
				'size': file.size,
				'type': file.type,
				'data': window['yengin'].b64encode(event.target['result'])
			}).subscribe(json => {
				json = window['yengin'].jsonParse(json);
				if (json['success']) {
					callback(ws.WEBSERVICE_URL + json['data']);
				} else { callback(''); }
			});
		});
		fReader.readAsBinaryString(file);
	}

	/* Requête PUT pour enregistrer une nouvelle image */
	AddImage(fileInfo) {
		fileInfo.key = this.WEBSERVICE_KEY; // security
		return this.http.post(this.WEBSERVICE_URL, fileInfo);
	}

}
