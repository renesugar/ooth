import { getI18n } from '.'

describe('ooth-i18n', () => {
    let __

    beforeEach(() => {
        __ = getI18n({
            en: {
                foo: 'bar',
                baz: 'hello {name}',
            },
            fr: {
                foo: 'asd',
                baz: 'hi {name}',
            },
        })
    })

    it('translates', () => {
        expect(__('foo')).toBe('bar')
    })

    it('interpolates', () => {
        expect(__('baz', {name: 'Mark'})).toBe('hello Mark')
    })

    it('uses language', () => {
        expect(__('baz', {name: 'Mark'}, 'fr')).toBe('hi Mark')
    })
})