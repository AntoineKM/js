import {Id} from '../rest';
import {BaseSDK} from './base-sdk';

export class Pipe extends BaseSDK {
	async getStreams(project?: Id<'project'>) {
		if (!project && this.client.authType !== 'ptk') {
			throw new Error(
				'You must provide ID project id when using a bearer or pat token.',
			);
		}

		const {streams} = await this.client.get('/v1/pipe/streams', {project});

		return streams;
	}

	async createJoinToken(
		stream: Id<'stream'>,
		userId: string | number,
		metadata: unknown,
		project?: Id<'project'>,
	) {
		const {join_token: token} = await this.client.post(
			'/v1/pipe/streams/:stream_id/join-token',
			{metadata, user_id: userId},
			{project, stream_id: stream},
		);

		return token;
	}
}
