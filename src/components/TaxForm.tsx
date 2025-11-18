import { useState } from "react";
import { Info } from "lucide-react";

type EmpleadoData = {
    sba: string;
};

type EmpleadorData = {
    country: string;
    facturacion: string;
    gastos: string;
    trabajadores: string;
    salarioMedio: string;
};

// -----------------------------
// FORMATTERS
// -----------------------------
function formatNumber(num: number): string {
    return num.toLocaleString("es-ES", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

function formatNumberOutput(num: number): string {
    const parts = num.toString().split(".");
    
    // Formatear solo la parte entera
    const integerFormatted = parseInt(parts[0]).toLocaleString("es-ES");
    
    // Si hay decimales, no los tocamos
    if (parts[1]) {
        return `${integerFormatted},${parts[1]}`;
    }

    return integerFormatted;
}


function unformatNumber(value: string): string {
    return value.replace(/\./g, "").replace(",", ".");
}

// URLs de las banderas
const flagSpain =
    "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg";
const flagDubai =
    "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg";

export default function TaxForm() {
    const [role, setRole] = useState<"empleado" | "empleador" | null>("empleador");

    // -----------------------------
    // EMPLOYEE DATA
    // -----------------------------

    type ResultadoEmpresa = {
        impuestosSpain: number;
        impuestosDubai: number;
        totalAhorrado: number;
        beneficioDespuesSpain: number;
        beneficioDespuesDubai: number;
    };

    type ResultadoEmpleado = {
        netoAnualSpain: number;
        netoMensualSpain: number;
        costeEmpresaSpain: number;
        impuestosSpain: number;
        netoAnualDubai: number;
        netoMensualDubai: number;
        costeEmpresaDubai: number;
        impuestosDubai: number;
        ahorroImpuestos: number;
    };

    const [empleadoData, setEmpleadoData] = useState<EmpleadoData>({ sba: "" });
    const [empleadorData, setEmpleadorData] = useState<EmpleadorData>({
        country: "Spain",
        facturacion: "",
        gastos: "",
        trabajadores: "",
        salarioMedio: "",
    });

    const [resultado, setResultado] = useState<ResultadoEmpresa>({
        impuestosSpain: 0,
        impuestosDubai: 0,
        totalAhorrado: 0,
        beneficioDespuesSpain: 0,
        beneficioDespuesDubai: 0,
    });

    const [resultadoEmpleado, setResultadoEmpleado] = useState<ResultadoEmpleado>({
        netoAnualSpain: 0,
        netoMensualSpain: 0,
        costeEmpresaSpain: 0,
        impuestosSpain: 0,
        netoAnualDubai: 0,
        netoMensualDubai: 0,
        costeEmpresaDubai: 0,
        impuestosDubai: 0,
        ahorroImpuestos: 0,
    });


    const [showTooltipSpain, setShowTooltipSpain] = useState(false);
    const [showTooltipDubai, setShowTooltipDubai] = useState(false);

    // -----------------------------
    // HANDLERS
    // -----------------------------
    const handleEmpleadoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const raw = unformatNumber(value);
        if (/^\d*([.,]\d*)?$/.test(raw) || value === "") {
            const num = parseFloat(raw);
            if (isNaN(num)) {
                setEmpleadoData({ sba: "" });
                return;
            }
            setEmpleadoData({sba: formatNumberOutput(num) });
        }
    };

    const handleEmpleadorChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        if (name === "country") {
            setEmpleadorData((prev) => ({ ...prev, country: value }));
            return;
        }
        const raw = unformatNumber(value);
        if (/^\d*([.,]\d*)?$/.test(raw) || value === "") {
            const num = parseFloat(raw);
            if (isNaN(num)) {
                setEmpleadorData((prev) => ({ ...prev, [name]: "" }));
                return;
            }
            setEmpleadorData((prev) => ({
                ...prev,
                [name]: formatNumberOutput(num),
            }));
        }
    };

    // -----------------------------
    // IRPF FUNCTION (EMPLOYEE)
    // -----------------------------
    function calcularIRPF(base: number) {
        let impuesto = 0;
        const tramos = [
            { limite: 12450, tipo: 0.19 },
            { limite: 20200, tipo: 0.24 },
            { limite: 35200, tipo: 0.30 },
            { limite: 60000, tipo: 0.37 },
            { limite: 300000, tipo: 0.45 },
            { limite: Infinity, tipo: 0.47 },
        ];
        let restante = base;
        let anterior = 0;
        for (const tramo of tramos) {
            if (restante <= 0) break;
            const cantidadTramo = Math.min(restante, tramo.limite - anterior);
            impuesto += cantidadTramo * tramo.tipo;
            restante -= cantidadTramo;
            anterior = tramo.limite;
        }
        return impuesto;
    }

    // -----------------------------
    // CALCULAR EMPLOYEE
    // -----------------------------
    const calcularEmpleado = () => {
        const SBA = parseFloat(unformatNumber(empleadoData.sba)) || 0;

        const ssBase = Math.min(SBA, 58914);
        const ss = ssBase * 0.0635;
        const ssEmpresa = ssBase * 0.31;

        const irpf = calcularIRPF(SBA);

        const netoAnualSpain = SBA - ss - irpf;
        const netoMensualSpain = netoAnualSpain / 12;
        const costeEmpresaSpain = SBA + ssEmpresa;
        const impuestosSpain = costeEmpresaSpain - netoAnualSpain;

        const netoAnualDubai = SBA;
        const netoMensualDubai = SBA / 12;
        const costeEmpresaDubai = SBA + 300;
        const impuestosDubai = 300;

        const ahorro = impuestosSpain - impuestosDubai;

        setResultadoEmpleado({
            netoAnualSpain,
            netoMensualSpain,
            costeEmpresaSpain,
            impuestosSpain,
            netoAnualDubai,
            netoMensualDubai,
            costeEmpresaDubai,
            impuestosDubai,
            ahorroImpuestos: ahorro,
        });
    };

    // -----------------------------
    // CALCULAR EMPLOYER
    // -----------------------------
    const calcularAhorro = () => {
        const facturacion =
            parseFloat(unformatNumber(empleadorData.facturacion)) || 0;
        const gastos = parseFloat(unformatNumber(empleadorData.gastos)) || 0;
        const trabajadores =
            parseFloat(unformatNumber(empleadorData.trabajadores)) || 0;
        const salarioMedio =
            parseFloat(unformatNumber(empleadorData.salarioMedio)) || 0;

        // España
        const baseSS = Math.min(salarioMedio, 58914); // tope SS
        const seguridadSocial = trabajadores * baseSS * 0.31;
        const costeLaboralSpain = trabajadores * salarioMedio + seguridadSocial;

        // Dubai
        const costeLaboralDubai = trabajadores * (salarioMedio + 300);

        const gastosSpain = gastos + costeLaboralSpain;
        const gastosDubai = gastos + costeLaboralDubai;

        const beneficioSpain = facturacion - gastosSpain;
        const beneficioDubai = facturacion - gastosDubai;

        const impuestosSpain =
            beneficioSpain > 0 ? beneficioSpain * 0.25 + seguridadSocial : seguridadSocial;
        const impuestosDubai =
            beneficioDubai > 90000 ? (beneficioDubai - 90000) * 0.09 : 0;

        const beneficioDespuesSpain = beneficioSpain - impuestosSpain;
        const beneficioDespuesDubai = beneficioDubai - impuestosDubai;

        const totalAhorrado = impuestosSpain - (impuestosDubai + trabajadores * 300);

        setResultado({
            impuestosSpain,
            impuestosDubai,
            totalAhorrado,
            beneficioDespuesSpain,
            beneficioDespuesDubai,
        });
    };

    const inputStyle =
        "w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 text-white placeholder-slate-400 text-sm";

    const roleButtonStyle =
        "px-4 py-2 bg-amber-500 text-slate-900 font-semibold rounded-lg transition-all transform hover:scale-105 text-sm";

    // -----------------------------
    // RENDER
    // -----------------------------
    return (
        <div
            id="tax-form"
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-4xl mx-auto my-16"
        >
            {/* ROLE SELECTOR */}
            <div className="flex justify-center gap-3 mb-4">
                <button
                    onClick={() => setRole("empleado")}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${role === "empleado"
                            ? roleButtonStyle
                            : "bg-white/5 text-white hover:bg-white/10"
                        }`}
                >
                    Employee
                </button>
                <button
                    onClick={() => setRole("empleador")}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${role === "empleador"
                            ? roleButtonStyle
                            : "bg-white/5 text-white hover:bg-white/10"
                        }`}
                >
                    Employer
                </button>
            </div>

            {/* EMPLOYEE FORM */}
            {role === "empleado" && (
                <>
                    <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2">
                        <h3 className="text-xl font-bold">Employee Form</h3>
                        <span className="text-sm text-slate-400 italic">
                            All calculations are in Euros (€)
                        </span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-end gap-4 mb-6">
                        {/* SBA Input */}
                        <div className="flex-1 max-w-xs w-full">
                            <label className="block mb-1 text-sm">Gross Annual Salary</label>
                            <input
                                type="text"
                                name="sba"
                                required
                                value={empleadoData.sba}
                                onChange={handleEmpleadoChange}
                                className={inputStyle}
                                placeholder="Eg: 40.000"
                            />
                        </div>

                        {/* Country Select */}
                        <div className="max-w-[140px] w-full">
                            <label className="block mb-1 text-sm">Country</label>
                            <select
                                name="country"
                                value="Spain"
                                disabled
                                className={inputStyle + " bg-white/10 cursor-not-allowed"}
                            >
                                <option value="Spain">Spain</option>
                            </select>
                        </div>

                        {/* Calculate Button */}
                        <button
                            type="button"
                            onClick={calcularEmpleado}
                            className={`${roleButtonStyle} w-full sm:w-auto h-[42px]`}
                        >
                            Calculate
                        </button>
                    </div>

                    {/* RESULTADOS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {/* SPAIN */}
                        <div className="bg-white/10 border border-amber-500 rounded-lg p-4">
                            <div className="flex items-center gap-2 font-semibold text-lg mb-2">
                                <div className="w-6 h-6 rounded-full overflow-hidden border border-white/30 flex items-center justify-center bg-white/20">
                                    <img
                                        src={flagSpain}
                                        alt="Spain"
                                        className="w-auto h-auto object-cover object-center"
                                    />
                                </div>
                                Taxes in Spain
                            </div>
                            <div className="font-semibold">Net Annual</div>
                            <div>{formatNumber(resultadoEmpleado.netoAnualSpain)} €</div>
                            <div className="font-semibold mt-2">Net Monthly</div>
                            <div className="text-[10px] text-gray-400 font-normal leading-none">
                                12 payments
                            </div>
                            <div>{formatNumber(resultadoEmpleado.netoMensualSpain)} €</div>
                            <div className="font-semibold mt-2">Cost for Company</div>
                            <div>{formatNumber(resultadoEmpleado.costeEmpresaSpain)} €</div>
                            <div className="font-semibold mt-2 text-amber-200">Total Taxes</div>
                            <div>{formatNumber(resultadoEmpleado.impuestosSpain)} €</div>
                        </div>

                        {/* DUBAI */}
                        <div className="bg-white/10 border border-amber-500 rounded-lg p-4">
                            <div className="flex items-center gap-2 font-semibold text-lg mb-2">
                                <div className="w-6 h-6 rounded-full overflow-hidden border border-white/30 flex items-center justify-center bg-white/20">
                                    <img
                                        src={flagDubai}
                                        alt="Dubai"
                                        className="w-auto h-auto object-cover object-center"
                                    />
                                </div>
                                Taxes in Dubai
                            </div>
                            <div className="font-semibold">Net Annual</div>
                            <div>{formatNumber(resultadoEmpleado.netoAnualDubai)} €</div>

                            <div className="font-semibold mt-2">Net Monthly</div>
                            <div className="text-[10px] text-gray-400 font-normal leading-none">
                                12 payments
                            </div>
                            <div>{formatNumber(resultadoEmpleado.netoMensualDubai)} €</div>

                            <div className="font-semibold mt-2">Cost for Company</div>
                            <div>{formatNumber(resultadoEmpleado.costeEmpresaDubai)} €</div>

                            <div className="font-semibold mt-2 text-amber-200">Total Taxes</div>
                            <div>{formatNumber(resultadoEmpleado.impuestosDubai)} €</div>
                        </div>

                        {/* TOTAL SAVINGS */}
                        <div className="bg-white/10 border border-amber-500 rounded-lg p-4 mt-6 text-center">
                            <div className="font-semibold text-lg">Total tax savings</div>
                            <div className="text-2xl mt-1">
                                {formatNumber(resultadoEmpleado.ahorroImpuestos)} €
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* EMPLOYER FORM */}
            {role === "empleador" && (
                <>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold">Employer Form</h3>
                        <span className="text-sm text-slate-400 italic">
                            All calculations are in Euros (€)
                        </span>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex-1 space-y-3 text-sm"
                        >
                            <div>
                                <label className="block mb-1">Country</label>
                                <select
                                    name="country"
                                    value={empleadorData.country}
                                    onChange={handleEmpleadorChange}
                                    className={inputStyle}
                                >
                                    <option value="Spain">Spain</option>
                                </select>
                            </div>

                            <div>
                                <label className="block mb-1">Total Revenue</label>
                                <input
                                    type="text"
                                    name="facturacion"
                                    required
                                    value={empleadorData.facturacion}
                                    onChange={handleEmpleadorChange}
                                    className={inputStyle}
                                    placeholder="Eg: 1.000.000"
                                />
                            </div>

                            <div>
                                <label className="block mb-1">Deductible Expenses</label>
                                <input
                                    type="text"
                                    name="gastos"
                                    required
                                    value={empleadorData.gastos}
                                    onChange={handleEmpleadorChange}
                                    className={inputStyle}
                                    placeholder="Eg: 120.000"
                                />
                            </div>

                            <div>
                                <label className="block mb-1">Number of Employees</label>
                                <input
                                    type="text"
                                    name="trabajadores"
                                    required
                                    value={empleadorData.trabajadores}
                                    onChange={handleEmpleadorChange}
                                    className={inputStyle}
                                    placeholder="Eg: 8"
                                />
                            </div>

                            <div>
                                <label className="block mb-1">
                                    Average Employee Salary (Gross Annual)
                                </label>
                                <input
                                    type="text"
                                    name="salarioMedio"
                                    required
                                    value={empleadorData.salarioMedio}
                                    onChange={handleEmpleadorChange}
                                    className={inputStyle}
                                    placeholder="Eg: 32.000"
                                />
                            </div>
                        </form>

                        <div className="flex flex-col gap-3 md:w-1/3 mt-1">
                            <button
                                type="button"
                                onClick={calcularAhorro}
                                className={roleButtonStyle}
                            >
                                Calculate
                            </button>

                            {/* SPAIN */}
                            <div className="bg-white/10 border border-amber-500 rounded-lg p-2 relative">
                                <div className="flex items-center gap-2 font-semibold mb-1">
                                    <div className="w-6 h-6 rounded-full overflow-hidden border border-white/30 flex items-center justify-center bg-white/20">
                                        <img
                                            src={flagSpain}
                                            alt="Spain"
                                            className="w-auto h-auto object-cover object-center"
                                        />
                                    </div>
                                    Taxes in Spain
                                    <Info
                                        className="w-4 h-4 text-gray-400 cursor-pointer"
                                        onClick={() => setShowTooltipSpain(!showTooltipSpain)}
                                    />
                                </div>
                                {showTooltipSpain && (
                                    <div className="absolute z-10 w-64 p-2 text-xs text-white bg-gray-800 rounded-md shadow-lg mt-1">
                                        SPAIN
                                        <br />
                                        Personal Income Tax and Social Security Not Shown 25-53% ❌
                                        <br />
                                        Dividends 19-28 % ❌
                                    </div>
                                )}
                                <div>{formatNumber(resultado.impuestosSpain)} €</div>
                                <div className="font-semibold text-amber-200">Profit after taxes</div>
                                <div>{formatNumber(resultado.beneficioDespuesSpain)} €</div>
                            </div>

                            {/* DUBAI */}
                            <div className="bg-white/10 border border-amber-500 rounded-lg p-2 relative">
                                <div className="flex items-center gap-2 font-semibold mb-1">
                                    <div className="w-6 h-6 rounded-full overflow-hidden border border-white/30 flex items-center justify-center bg-white/20">
                                        <img
                                            src={flagDubai}
                                            alt="Dubai"
                                            className="w-auto h-auto object-cover object-center"
                                        />
                                    </div>
                                    Taxes in Dubai
                                    <Info
                                        className="w-4 h-4 text-gray-400 cursor-pointer"
                                        onClick={() => setShowTooltipDubai(!showTooltipDubai)}
                                    />
                                </div>
                                {showTooltipDubai && (
                                    <div className="absolute z-10 w-64 p-2 text-xs text-white bg-gray-800 rounded-md shadow-lg mt-1">
                                        DUBAI
                                        <br />
                                        Personal Income Tax and Social Security Included 0% ✅
                                        <br />
                                        Dividends 0% ✅
                                    </div>
                                )}
                                <div>{formatNumber(resultado.impuestosDubai)} €</div>
                                <div className="font-semibold text-amber-200">Profit after taxes</div>
                                <div>{formatNumber(resultado.beneficioDespuesDubai)} €</div>
                            </div>

                            {/* SAVINGS */}
                            <div className="bg-white/10 border border-amber-500 rounded-lg p-2">
                                <div className="font-semibold">Total tax savings</div>
                                <div>{formatNumber(resultado.totalAhorrado)} €</div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}