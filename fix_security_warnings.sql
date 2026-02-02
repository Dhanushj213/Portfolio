DO
$$
DECLARE
    func_record RECORD;
    func_name TEXT;
    target_functions TEXT[] := ARRAY['handle_new_user', 'sync_loan_interest', 'submit_payment'];
BEGIN
    FOREACH func_name IN ARRAY target_functions
    LOOP
        -- Find all functions with the given name in the 'public' schema
        FOR func_record IN 
            SELECT oid::regprocedure AS signature
            FROM pg_proc
            WHERE proname = func_name
            AND pronamespace = 'public'::regnamespace
        LOOP
            -- Execute the ALTER FUNCTION command for each signature found
            EXECUTE format('ALTER FUNCTION %s SET search_path = public', func_record.signature);
            RAISE NOTICE 'Fixed search_path for: %', func_record.signature;
        END LOOP;
    END LOOP;
END;
$$;
