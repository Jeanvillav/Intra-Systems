import json
import os

new_en = {
    "makeAppointment": "MAKE AN APPOINTMENT",
    "pgHeadline": "ACHIEVE PRACTICE GROWTH, PATIENT LOYALTY AND LOVE LASER DENTISTRY",
    "pgTitle1": "PATIENT GROWTH",
    "pgDesc1": "Attracts more patients effortlessly, helping you grow your practice. Retain more patients, allows you to handle more treatments in-house keeping patients with you.",
    "pgTitle2": "PATIENT LOYALTY",
    "pgDesc2": "Achieve balance, and cultivate patient loyalty. Elevate your dental practice with lasting patient relationships and the success you deserve, offering new procedures patients want and need.",
    "pgTitle3": "LOVE LASER DENTISTRY",
    "pgDesc3": "All the new production comes from the soft tissue and photobiomodulation applications that most practices don't have a good way of doing, this means you’ll have the ability to do them very quickly very easily and profitably. Lasers are versatile and suitable for every dental specialty, bringing passion and purpose to your dentistry.",
    "smSmarterHeadline": "Lasers are the smarter solution for dental practices...",
    "smTitle1": "Delivers affordability",
    "smDesc1": "Keeps costs under control without compromising quality, ensuring excellent value for your investment",
    "smTitle2": "Delivers Patient Growth",
    "smDesc2": "Attracts new patients in autopilot, helping your practice stand out in a competitive market",
    "smTitle3": "Delivers Guaranteed ROI",
    "smDesc3": "Offering tangible results you can count on to grow your practice sustainably",
    "smReadyText": "If you are ready to learn more about lasers book a call with me or my team",
    "cmpTitle1": "Without lasers:",
    "cmpDesc1a": "You lose patients to practices offering faster, more comfortable treatments.",
    "cmpDesc1b": "Referral rates increase, reducing revenue and patient loyalty.",
    "cmpDesc1c": "Traditional methods limit efficiency, treatment options, and practice growth.",
    "cmpDesc1d": "You blend in with every other clinic, competing for the same patients who don’t see any distinction between practices.",
    "cmpDesc1e": "Without them, it’s harder to attract and retain patients.",
    "cmpTitle2": "With lasers:",
    "cmpDesc2a": "Provide faster, more comfortable treatments that patients love. Perform advanced procedures in-house, reducing referrals and boosting revenue. Attract new patients effortlessly, improve efficiency, and build long-term loyalty. Achieve professional success.",
    "cmpDesc2b": "Total pain management, precise fluid and blood control, essential particulary during composite restorations.",
    "cmpDesc2c": "Perform them quickly, easily, and profitably— Lasers are versatile and suitable for every dental specialty, reigniting your passion and purpose for dentistry."
}

new_es = {
    "makeAppointment": "PROGRAMAR UNA CITA",
    "pgHeadline": "LOGRA EL CRECIMIENTO DE TU CLÍNICA, LEALTAD DEL PACIENTE Y AMA LA ODONTOLOGÍA LÁSER",
    "pgTitle1": "CRECIMIENTO DE PACIENTES",
    "pgDesc1": "Atrae a más pacientes sin esfuerzo, ayudándote a hacer crecer tu clínica. Retén a más pacientes, permitiéndote manejar más tratamientos internamente y manteniendo a los pacientes contigo.",
    "pgTitle2": "LEALTAD DEL PACIENTE",
    "pgDesc2": "Logra el equilibrio y cultiva la lealtad del paciente. Eleva tu clínica dental con relaciones duraderas con los pacientes y el éxito que mereces, ofreciendo nuevos procedimientos que los pacientes desean y necesitan.",
    "pgTitle3": "AMA LA ODONTOLOGÍA LÁSER",
    "pgDesc3": "Toda la nueva producción proviene de aplicaciones de tejidos blandos y fotobiomodulación que la mayoría de las clínicas no tienen una buena forma de realizar. Esto significa que tendrás la capacidad de hacerlas muy rápida, fácil y rentablemente. Los láseres son versátiles y adecuados para cada especialidad dental, aportando pasión y propósito a tu odontología.",
    "smSmarterHeadline": "Los láseres son la solución más inteligente para las clínicas dentales...",
    "smTitle1": "Brinda Asequibilidad",
    "smDesc1": "Mantiene los costos bajo control sin comprometer la calidad, asegurando un excelente valor por tu inversión.",
    "smTitle2": "Brinda Crecimiento de Pacientes",
    "smDesc2": "Atrae nuevos pacientes en piloto automático, ayudando a tu clínica a destacar en un mercado competitivo.",
    "smTitle3": "Brinda un ROI Garantizado",
    "smDesc3": "Ofrece resultados tangibles con los que puedes contar para hacer crecer tu clínica de manera sostenible.",
    "smReadyText": "Si estás listo para aprender más sobre los láseres, programa una llamada conmigo o con mi equipo.",
    "cmpTitle1": "Sin láseres:",
    "cmpDesc1a": "Pierdes pacientes ante clínicas que ofrecen tratamientos más rápidos y cómodos.",
    "cmpDesc1b": "Aumentan las tasas de derivación, reduciendo los ingresos y la lealtad de los pacientes.",
    "cmpDesc1c": "Los métodos tradicionales limitan la eficiencia, las opciones de tratamiento y el crecimiento de la clínica.",
    "cmpDesc1d": "Te camuflas con cualquier otra clínica, compitiendo por los mismos pacientes que no ven ninguna distinción.",
    "cmpDesc1e": "Sin ellos, es más difícil atraer y retener pacientes.",
    "cmpTitle2": "Con láseres:",
    "cmpDesc2a": "Brinda tratamientos más rápidos y cómodos que a los pacientes les encantan. Realiza procedimientos avanzados internamente, reduciendo derivaciones y aumentando ingresos. Atrae nuevos pacientes sin esfuerzo, mejora la eficiencia y construye lealtad a largo plazo.",
    "cmpDesc2b": "Manejo total del dolor, control preciso de fluidos y sangre, esencial particularmente durante las restauraciones.",
    "cmpDesc2c": "Realízalos de forma rápida, fácil y rentable. Los láseres son versátiles y adecuados para todas las especialidades dentales, reavivando tu pasión y propósito por la odontología."
}

def update_file(filepath, new_data):
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    data.update(new_data)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

update_file('messages/en.json', new_en)
update_file('messages/es.json', new_es)

print("JSON files updated.")
