-- Migration unit 1: schema_changes
-- Transaction mode: transactional
-- Boundary reason: default

DROP INDEX public.automation_dates_reservations_date_id_key;

DROP INDEX public.automation_dates_reservations_user_id_key;

DROP POLICY "Enable delete for users based on user_id" ON public.automation_dates_reservations;

DROP POLICY "Enable insert for authenticated users only" ON public.automation_dates_reservations;

CREATE POLICY "Enable delete for users based on user_id" ON public.automation_dates_reservations
  FOR DELETE
  USING (true);

CREATE POLICY "Enable insert for authenticated users only" ON public.automation_dates_reservations
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "update profile" ON public.profiles
  FOR UPDATE
  USING (true)
  WITH CHECK (true);