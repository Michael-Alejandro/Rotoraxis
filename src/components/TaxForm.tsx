import { useState, useEffect } from "react";
import { Send } from "lucide-react";

type EmpleadoData = {
    name: string;
    email: string;
    service: string;
    message: string;
};

type EmpleadorData = {
    facturacion: string;
    gastos: string;
    trabajadores: string;
    salarioMedio: string;
};

export default function TaxForm() {
    const [role, setRole] = useState<"empleado" | "empleador" | null>("empleador");

    const [empleadoData, setEmpleadoData] = useState<EmpleadoData>({
        name: "",
        email: "",
        service: "tax",
        message: "",
    });

    const [empleadorData, setEmpleadorData] = useState<EmpleadorData>({
        facturacion: "",
        gastos: "",
        trabajadores: "",
        salarioMedio: "",
    });

    const [resultado, setResultado] = useState<{
        impuestosEspaña: number;
        impuestosDubai: number;
        totalAhorrado: number;
        beneficioDespuesEspaña?: number;
        beneficioDespuesDubai?: number;
    }>({
        impuestosEspaña: 0,
        impuestosDubai: 0,
        totalAhorrado: 0,
        beneficioDespuesEspaña: 0,
        beneficioDespuesDubai: 0,
    });


    const handleEmpleadoChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setEmpleadoData((prev) => ({ ...prev, [name]: value }));
    };

    const handleEmpleadorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (/^[0-9]*[.,]?[0-9]*$/.test(value)) {
            setEmpleadorData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleEmpleadoSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Empleado enviado:", empleadoData);
    };

    const handleEmpleadorSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        calcularAhorro();
    };

    const calcularAhorro = () => {
        const facturacion = parseFloat(empleadorData.facturacion.replace(",", ".")) || 0;
        const gastos = parseFloat(empleadorData.gastos.replace(",", ".")) || 0;
        const trabajadores = parseFloat(empleadorData.trabajadores.replace(",", ".")) || 0;
        const salarioMedio = parseFloat(empleadorData.salarioMedio.replace(",", ".")) || 0;

        const beneficio = facturacion - gastos - trabajadores * salarioMedio;

        const impuestosEspaña = beneficio * 0.25;
        const impuestosDubai = beneficio * 0.05;
        const totalAhorrado = impuestosEspaña - impuestosDubai;

        const beneficioDespuesEspaña = beneficio - impuestosEspaña;
        const beneficioDespuesDubai = beneficio - impuestosDubai;

        setResultado({
            impuestosEspaña,
            impuestosDubai,
            totalAhorrado,
            beneficioDespuesEspaña,
            beneficioDespuesDubai
        });
    };

    useEffect(() => {
        const handleOpenForm = (e: CustomEvent) => {
            setRole(e.detail); // e.detail será "empleador"
        };

        window.addEventListener("openForm", handleOpenForm as EventListener);

        return () => {
            window.removeEventListener("openForm", handleOpenForm as EventListener);
        };
    }, []);

    const inputStyle =
        "w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 text-white placeholder-slate-400 text-sm";

    const roleButtonStyle =
        "px-4 py-2 bg-amber-500 text-slate-900 font-semibold rounded-lg transition-all transform hover:scale-105 text-sm";

    return (
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-4xl mx-auto">
            {/* BOTONES DE SELECCIÓN */}
            <div className="flex justify-center gap-3 mb-4">
                <button
                    onClick={() => setRole("empleado")}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${role === "empleado" ? roleButtonStyle : "bg-white/5 text-white hover:bg-white/10"
                        }`}
                >
                    Empleado
                </button>
                <button
                    onClick={() => setRole("empleador")}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${role === "empleador" ? roleButtonStyle : "bg-white/5 text-white hover:bg-white/10"
                        }`}
                >
                    Empleador
                </button>
            </div>

            {/* FORMULARIO EMPLEADO */}
            {role === "empleado" && (
                <>
                    <h3 className="text-xl font-bold mb-4">Formulario Empleado</h3>
                    <form onSubmit={handleEmpleadoSubmit} className="space-y-3 text-sm">
                        <div>
                            <label className="block mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={empleadoData.name}
                                onChange={handleEmpleadoChange}
                                className={inputStyle}
                                placeholder="Tu nombre"
                            />
                        </div>
                        <div>
                            <label className="block mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={empleadoData.email}
                                onChange={handleEmpleadoChange}
                                className={inputStyle}
                                placeholder="tu.email@ejemplo.com"
                            />
                        </div>
                        <div>
                            <label className="block mb-1">I'm interested in</label>
                            <select
                                name="service"
                                value={empleadoData.service}
                                onChange={handleEmpleadoChange}
                                className={inputStyle}
                            >
                                <option value="tax">Tax Residency & Umbrella Company</option>
                                <option value="candidate">Joining as a Candidate</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1">Message</label>
                            <textarea
                                name="message"
                                required
                                value={empleadoData.message}
                                onChange={handleEmpleadoChange}
                                rows={3}
                                className={inputStyle}
                                placeholder="Describe tus necesidades..."
                            />
                        </div>
                        <button type="submit" className={`${roleButtonStyle} w-full flex items-center justify-center gap-2`}>
                            Send Message <Send className="w-4 h-4" />
                        </button>
                    </form>
                </>
            )}

            {/* FORMULARIO EMPLEADOR */}
            {role === "empleador" && (
                <>
                    <h3 className="text-xl font-bold mb-4">Formulario Empleador</h3>
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Formulario */}
                        <form onSubmit={handleEmpleadorSubmit} className="flex-1 space-y-3 text-sm">
                            <div>
                                <label className="block mb-1">Facturación total</label>
                                <input
                                    type="text"
                                    name="facturacion"
                                    required
                                    value={empleadorData.facturacion}
                                    onChange={handleEmpleadorChange}
                                    className={inputStyle}
                                    placeholder="Ej: 100000"
                                />
                            </div>
                            <div>
                                <label className="block mb-1">Gastos deducibles</label>
                                <input
                                    type="text"
                                    name="gastos"
                                    required
                                    value={empleadorData.gastos}
                                    onChange={handleEmpleadorChange}
                                    className={inputStyle}
                                    placeholder="Ej: 25000"
                                />
                            </div>
                            <div>
                                <label className="block mb-1">Nº trabajadores</label>
                                <input
                                    type="text"
                                    name="trabajadores"
                                    required
                                    value={empleadorData.trabajadores}
                                    onChange={handleEmpleadorChange}
                                    className={inputStyle}
                                    placeholder="Ej: 10"
                                />
                            </div>
                            <div>
                                <label className="block mb-1">Salario medio del trabajador (Bruto anual)</label>
                                <input
                                    type="text"
                                    name="salarioMedio"
                                    required
                                    value={empleadorData.salarioMedio}
                                    onChange={handleEmpleadorChange}
                                    className={inputStyle}
                                    placeholder="Ej: 35000"
                                />
                            </div>
                        </form>

                        {/* Botón + resultados lateral */}
                        <div className="flex flex-col gap-3 md:w-1/3 mt-1">
                            <button
                                type="button"
                                onClick={calcularAhorro}
                                className={roleButtonStyle} // ✅ Botón igual a los de Empleado/Empleador
                            >
                                Calculate
                            </button>

                            <div className="bg-white/10 border border-amber-500 rounded-lg p-2">
                                <div className="font-semibold">Taxes in España</div>
                                <div>{resultado.impuestosEspaña.toFixed(2)} €</div>
                                <div className="font-semibold text-amber-200">Profit after taxes</div>
                                <div>{resultado.beneficioDespuesEspaña?.toFixed(2)} €</div>
                            </div>
                            <div className="bg-white/10 border border-amber-500 rounded-lg p-2">
                                <div className="font-semibold">Taxes in Dubai</div>
                                <div>{resultado.impuestosDubai.toFixed(2)} €</div>
                                <div className="font-semibold text-amber-200">Profit after taxes</div>
                                <div>{resultado.beneficioDespuesDubai?.toFixed(2)} €</div>
                            </div>
                            <div className="bg-white/10 border border-amber-500 rounded-lg p-2">
                                <div className="font-semibold">Total tax savings</div>
                                <div>{resultado.totalAhorrado.toFixed(2)} €</div>
                            </div>

                        </div>
                    </div>
                </>
            )}
        </div>
    );
}