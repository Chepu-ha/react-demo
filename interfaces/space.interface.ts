// створити інтерфейс на основі цього объекта:
// Зверніть увагу там де масиви... в них може бути багато однотипних об'єктів

export interface ILinks {
    article_link: null,
    video_link: string
}

export interface ICore {
    flight: number,
    core: {
        reuse_count: number,
        status: string
    }
}

export interface IFirst_stage<ICore> {
    cores: [
        ICore
    ]
}

export interface IPayload {
    payload_type: string,
    payload_mass_kg: number,
    payload_mass_lbs: number
}

export interface ISecond_stage<IPayload> {
    payloads: [
        IPayload
    ]
}

export interface IRocket<IFirst_stage, ISecond_stage> {
    rocket_name: string,
    first_stage: IFirst_stage,
    second_stage: ISecond_stage
}

export interface ISpace<ILinks, IRocket> {
    mission_name: string,
    launch_date_local: string,
    launch_site: {
        site_name_long: string
    },
    links: ILinks,
    rocket: IRocket
}
