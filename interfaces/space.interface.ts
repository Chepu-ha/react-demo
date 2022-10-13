// створити інтерфейс на основі цього объекта:
// Зверніть увагу там де масиви... в них може бути багато однотипних об'єктів

interface ICore {
    flight: number
    core: {
        reuse_count: number
        status: unknown | boolean
    }
}

interface IPayloads {
    "payload_type": string,
    "payload_mass_kg": number,
    "payload_mass_lbs": number
}

interface ISpace {
    mission_name: string
    launch_date_local: string
    launch_site: {
        site_name_long: string
    },
    links: {
        article_link: string
        video_link: string
    },
    rocket: {
        rocket_name: string
        first_stage: {
            cores: ICore[]
        },
        second_stage: {
            payloads: IPayloads[]
        }
    }
}

export {IPayloads, ICore, ISpace}