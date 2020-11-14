export default class Content {

    private temperatura: string = "0";
    private tempMax: string = "0";
    private tempMin: string = "0";

    private luminosidade: string = "0";
    private luminosidadeMax: string = "0";
    private luminosidadeMin: string = "0";

    private umidade: string = "0";
    private umidMax: string = "0";
    private umidMin: string = "0";

    private statusBuzzer: string = "0";
    private currentColor: string = "0";

    constructor(temperatura: string, tempMax: string, tempMin: string,                 
                umidade: string, umidMax: string,umidMin: string,
                luminosidade: string, luminosidadeMax: string,luminosidadeMin: string,
                statusBuzzer: string, currentColor: string
                ) {
        this.temperatura = temperatura
        this.tempMax = tempMax
        this.tempMin = tempMin
        this.luminosidade = luminosidade
        this.luminosidadeMax = luminosidadeMax
        this.luminosidadeMin = luminosidadeMin
        this.umidade = umidade
        this.umidMax = umidMax
        this.umidMin = umidMin
        this.statusBuzzer = statusBuzzer
        this.currentColor = currentColor
        
    }
    /**
    * Getter $temperature

    * @return {​​string }​

    */

    public get $temperatura(): string {
        return this.temperatura;
    }

    /**

    * Setter $temperature
    * @param {​​string }​​ value
    */

    public set $temperatura(value: string) {
        this.temperatura = value;
    }

    /**
     * Getter $luminosidade
     * @return {string }
     */
	public get $luminosidade(): string  {
		return this.luminosidade;
	}

    /**
     * Setter $luminosidade
     * @param {string } value
     */
	public set $luminosidade(value: string ) {
		this.luminosidade = value;
	}

    /**
     * Getter $tempMax
     * @return {string }
     */
	public get $tempMax(): string  {
		return this.tempMax;
	}

    /**
     * Getter $tempMin
     * @return {string }
     */
	public get $tempMin(): string  {
		return this.tempMin;
	}

    /**
     * Getter $luminosidadeMax
     * @return {string }
     */
	public get $luminosidadeMax(): string  {
		return this.luminosidadeMax;
	}

    /**
     * Getter $luminosidadeMin
     * @return {string }
     */
	public get $luminosidadeMin(): string  {
		return this.luminosidadeMin;
	}

    /**
     * Getter $umidade
     * @return {string }
     */
	public get $umidade(): string  {
		return this.umidade;
	}

    /**
     * Getter $umidMax
     * @return {string }
     */
	public get $umidMax(): string  {
		return this.umidMax;
	}

    /**
     * Getter $umidMin
     * @return {string }
     */
	public get $umidMin(): string  {
		return this.umidMin;
	}

    /**
     * Getter $statusBuzzer
     * @return {string }
     */
	public get $statusBuzzer(): string  {
		return this.statusBuzzer;
	}

    /**
     * Getter $currentColor
     * @return {string }
     */
	public get $currentColor(): string  {
		return this.currentColor;
	}

    /**
     * Setter $tempMax
     * @param {string } value
     */
	public set $tempMax(value: string ) {
		this.tempMax = value;
	}

    /**
     * Setter $tempMin
     * @param {string } value
     */
	public set $tempMin(value: string ) {
		this.tempMin = value;
	}

    /**
     * Setter $luminosidadeMax
     * @param {string } value
     */
	public set $luminosidadeMax(value: string ) {
		this.luminosidadeMax = value;
	}

    /**
     * Setter $luminosidadeMin
     * @param {string } value
     */
	public set $luminosidadeMin(value: string ) {
		this.luminosidadeMin = value;
	}

    /**
     * Setter $umidade
     * @param {string } value
     */
	public set $umidade(value: string ) {
		this.umidade = value;
	}

    /**
     * Setter $umidMax
     * @param {string } value
     */
	public set $umidMax(value: string ) {
		this.umidMax = value;
	}

    /**
     * Setter $umidMin
     * @param {string } value
     */
	public set $umidMin(value: string ) {
		this.umidMin = value;
	}

    /**
     * Setter $statusBuzzer
     * @param {string } value
     */
	public set $statusBuzzer(value: string ) {
		this.statusBuzzer = value;
	}

    /**
     * Setter $currentColor
     * @param {string } value
     */
	public set $currentColor(value: string ) {
		this.currentColor = value;
	}

    
}​​