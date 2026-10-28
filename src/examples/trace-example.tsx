/** Свой пример Risinka на публичных частях официального Trace (MIT, CLI4.21, registry28.10.2026). */
import { Trace, TraceLine, TraceTitle, TraceDescription } from "@/components/ui/trace";
export function TraceEmpty() { return <Trace><TraceLine status="pending"><TraceTitle>Шаг ещё не начался</TraceTitle></TraceLine></Trace> }
export function TraceWorking() { return <Trace><TraceLine status="running"><TraceTitle>Проверяю проект</TraceTitle><TraceDescription>В работе</TraceDescription></TraceLine></Trace> }
export function TraceError() { return <Trace><TraceLine status="error"><TraceTitle>Проверка завершилась ошибкой</TraceTitle><TraceDescription>Повторите проверку после исправления</TraceDescription></TraceLine></Trace> }
export function TraceData() { return <Trace><TraceLine><TraceTitle>Проверка завершена</TraceTitle><TraceDescription>Все файлы обработаны</TraceDescription></TraceLine></Trace> }
export default function TraceExample() { return <div className="space-y-6"><TraceEmpty/><TraceWorking/><TraceError/><TraceData/></div> }
